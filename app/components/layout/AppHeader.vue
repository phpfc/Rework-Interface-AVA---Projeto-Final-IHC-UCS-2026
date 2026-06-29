<template>
  <header class="bg-white border-b border-gray-200">
    <div class="px-4">
      <div class="flex items-center h-14 gap-3">
        <!-- Hamburger (mobile only) -->
        <button
          class="p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors lg:hidden"
          @click="$emit('toggleSidebar')"
        >
          <FontAwesomeIcon :icon="['fas', 'bars']" class="text-lg" />
        </button>

        <!-- Back arrow (inner pages only) -->
        <button
          v-if="showBack"
          class="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          @click="router.back()"
        >
          <FontAwesomeIcon :icon="['fas', 'arrow-left']" class="text-lg" />
        </button>

        <!-- UCS Logo (mobile only, desktop has it in sidebar) -->
        <NuxtLink to="/" class="flex flex-col leading-tight lg:hidden">
          <span class="text-primary-500 font-bold text-xl tracking-wide">UCS</span>
          <span class="text-[9px] text-gray-500 uppercase tracking-wider leading-none">
            Universidade de Caxias do Sul
          </span>
        </NuxtLink>

        <!-- Page title (desktop) -->
        <h1 class="hidden lg:block text-lg font-semibold text-gray-800">{{ pageTitle }}</h1>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineEmits<{
  toggleSidebar: []
}>()

const route = useRoute()
const router = useRouter()

const showBack = computed(() => route.path !== '/')

const pageTitle = computed(() => {
  if (route.path === '/') return 'Início'
  if (route.path === '/arquivos') return 'Arquivos'
  if (route.path.startsWith('/disciplina/')) return 'Disciplina'
  if (route.path.startsWith('/quiz/')) return 'Simulado'
  if (route.path.startsWith('/resumo/')) return 'Resumo IA'
  return ''
})
</script>
