<template>
  <div class="min-h-screen flex flex-col">
    <!-- Quiz Header -->
    <QuizQuizHeader
      v-if="currentQuestion"
      :current-question="currentQuestionIndex + 1"
      :total-questions="totalQuestions"
      :bookmarked="currentQuestion.bookmarked"
      :flagged="currentQuestion.flagged"
      @back="router.back()"
      @toggle-bookmark="toggleBookmark(currentQuestion.id)"
      @toggle-flag="toggleFlag(currentQuestion.id)"
    />

    <!-- Content -->
    <div class="flex-1 px-4 py-6 mx-auto max-w-3xl w-full space-y-6">
      <!-- Feedback (after grading) -->
      <QuizQuizFeedback v-if="isGraded && result" :result="result" />

      <!-- Question Card -->
      <QuizQuestionCard
        v-if="currentQuestion"
        :question="currentQuestion"
        :selected-id="selectedAnswers[currentQuestion.id] ?? null"
        :show-result="isGraded"
        :correct-id="getCorrectId(currentQuestion.id)"
        @select="(altId: string) => selectAnswer(currentQuestion!.id, altId)"
      />

      <!-- Navigation -->
      <QuizQuizNavigation
        :can-prev="currentQuestionIndex > 0"
        :can-next="currentQuestionIndex < totalQuestions - 1"
        :is-last="currentQuestionIndex === totalQuestions - 1"
        @prev="prevQuestion"
        @next="nextQuestion"
      />

      <!-- Grade button -->
      <SharedActionButton
        v-if="!isGraded"
        label="Corrigir"
        variant="filled"
        @click="gradeQuiz"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'quiz',
})

const route = useRoute()
const router = useRouter()
const quizId = computed(() => route.params.id as string)

const {
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswers,
  selectAnswer,
  nextQuestion,
  prevQuestion,
  toggleBookmark,
  toggleFlag,
  gradeQuiz,
  isGraded,
  result,
} = useQuiz(quizId)

function getCorrectId(questionId: string): string | undefined {
  if (!isGraded.value || !result.value) return undefined
  const qr = result.value.questionResults.find(r => r.questionId === questionId)
  return qr?.correctId
}
</script>
