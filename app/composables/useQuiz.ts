import type { Quiz, QuizQuestion, QuizResult } from '../../data/types'
import { mockQuizzes } from '../../data/mocks/quizzes'

export function useQuiz(quizId: MaybeRef<string>) {
  const isLoading = ref(false)
  const currentQuestionIndex = ref(0)
  const selectedAnswers = ref<Record<string, string>>({})
  const isGraded = ref(false)
  const result = ref<QuizResult | null>(null)

  const quiz = computed<Quiz | undefined>(() => {
    const id = toValue(quizId)
    return mockQuizzes.find(q => q.id === id)
  })

  // Deep clone questions into a mutable ref so toggleBookmark/toggleFlag
  // persist without being overwritten by a computed re-evaluation
  const questions = ref<QuizQuestion[]>([])

  watch(
    quiz,
    (q) => {
      if (q) {
        questions.value = JSON.parse(JSON.stringify(q.questions))
      }
      else {
        questions.value = []
      }
    },
    { immediate: true },
  )

  const totalQuestions = computed(() => questions.value.length)

  const currentQuestion = computed<QuizQuestion | undefined>(() => {
    return questions.value[currentQuestionIndex.value]
  })

  function selectAnswer(questionId: string, alternativeId: string) {
    selectedAnswers.value = {
      ...selectedAnswers.value,
      [questionId]: alternativeId,
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex.value < totalQuestions.value - 1) {
      currentQuestionIndex.value++
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
    }
  }

  function goToQuestion(index: number) {
    if (index >= 0 && index < totalQuestions.value) {
      currentQuestionIndex.value = index
    }
  }

  function toggleBookmark(questionId: string) {
    const q = questions.value.find(q => q.id === questionId)
    if (q) {
      q.bookmarked = !q.bookmarked
    }
  }

  function toggleFlag(questionId: string) {
    const q = questions.value.find(q => q.id === questionId)
    if (q) {
      q.flagged = !q.flagged
    }
  }

  function gradeQuiz(): QuizResult {
    const questionResults = questions.value.map((q) => {
      const correctAlt = q.alternatives.find(a => a.isCorrect)
      const selectedId = selectedAnswers.value[q.id] ?? null
      const correctId = correctAlt?.id ?? ''

      return {
        questionId: q.id,
        selectedId,
        correctId,
        isCorrect: selectedId === correctId,
      }
    })

    const correctCount = questionResults.filter(r => r.isCorrect).length
    const totalQ = questionResults.length

    const quizResult: QuizResult = {
      totalQuestions: totalQ,
      correctCount,
      incorrectCount: totalQ - correctCount,
      scorePercent: totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0,
      questionResults,
    }

    result.value = quizResult
    isGraded.value = true

    return quizResult
  }

  return {
    quiz,
    questions,
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    selectedAnswers,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    toggleBookmark,
    toggleFlag,
    gradeQuiz,
    isGraded,
    result,
    isLoading,
  }
}
