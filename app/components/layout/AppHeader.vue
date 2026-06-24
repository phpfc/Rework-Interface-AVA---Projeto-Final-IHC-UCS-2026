<template>
  <header class="bg-white border-b border-gray-200">
    <div class="mx-auto max-w-5xl px-4">
      <!-- Main header row -->
      <div class="flex items-center h-14 gap-3">
        <!-- Back arrow (inner pages only) -->
        <button
          v-if="showBack"
          class="p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors"
          @click="router.back()"
        >
          <FontAwesomeIcon :icon="['fas', 'arrow-left']" class="text-lg" />
        </button>

        <!-- Hamburger -->
        <button
          class="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          @click="$emit('toggleSidebar')"
        >
          <FontAwesomeIcon :icon="['fas', 'bars']" class="text-lg" />
        </button>

        <!-- UCS Logo -->
        <NuxtLink to="/" class="flex flex-col leading-tight">
          <span class="text-primary-500 font-bold text-xl tracking-wide">UCS</span>
          <span class="text-[9px] text-gray-500 uppercase tracking-wider leading-none">
            Universidade de Caxias do Sul
          </span>
        </NuxtLink>

        <!-- Spacer -->
        <div class="flex-1" />

        <!-- Header actions (contextual) -->
        <div class="flex items-center gap-1">
          <button class="relative p-2 text-gray-500 hover:text-gray-800 transition-colors">
            <FontAwesomeIcon :icon="['fas', 'bell']" />
            <span
              v-if="unreadCount > 0"
              class="absolute top-1 right-1 w-4 h-4 bg-danger-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
            >
              {{ unreadCount > 9 ? '9+' : unreadCount }}
            </span>
          </button>
          <button class="p-2 text-gray-500 hover:text-gray-800 transition-colors">
            <FontAwesomeIcon :icon="['fas', 'envelope']" />
          </button>
        </div>
      </div>

      <!-- Contextual navigation bar -->
      <nav class="flex overflow-x-auto -mx-4 px-4 gap-1 pb-2 scrollbar-hide">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors"
          :class="isNavActive(item.to)
            ? 'bg-primary-50 text-primary-700 font-medium'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
        >
          <FontAwesomeIcon :icon="['fas', item.icon]" class="text-xs" />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
defineEmits<{
  toggleSidebar: []
}>()

const route = useRoute()
const router = useRouter()
const { unreadCount } = useNotices()

const showBack = computed(() => route.path !== '/')

const navItems = [
  { label: 'Avisos', icon: 'bell', to: '#' },
  { label: 'Mensagens', icon: 'envelope', to: '#' },
  { label: 'Grupos', icon: 'users', to: '#' },
  { label: 'Apoio acadêmico', icon: 'hands-helping', to: '#' },
]

function isNavActive(to: string) {
  if (to === '#') return false
  return route.path === to
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
