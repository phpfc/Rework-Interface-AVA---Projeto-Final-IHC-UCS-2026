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
        <button class="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <FontAwesomeIcon :icon="['fas', 'bars']" class="text-lg" />
        </button>

        <!-- UCS Logo -->
        <div class="flex flex-col leading-tight">
          <span class="text-primary-500 font-bold text-xl tracking-wide">UCS</span>
          <span class="text-[9px] text-gray-500 uppercase tracking-wider leading-none">
            Universidade de Caxias do Sul
          </span>
        </div>
      </div>

      <!-- Navigation bar -->
      <nav class="flex overflow-x-auto -mx-4 px-4 gap-1 pb-2 scrollbar-hide">
        <a
          v-for="item in navItems"
          :key="item.label"
          href="#"
          class="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <FontAwesomeIcon :icon="['fas', item.icon]" class="text-xs" />
          <span>{{ item.label }}</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const showBack = computed(() => route.path !== '/')

const navItems = [
  { label: 'Avisos', icon: 'bell' },
  { label: 'Mensagens', icon: 'envelope' },
  { label: 'Grupos', icon: 'users' },
  { label: 'Grade de Notas', icon: 'chart-bar' },
  { label: 'Apoio acadêmico', icon: 'hands-helping' },
]
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
