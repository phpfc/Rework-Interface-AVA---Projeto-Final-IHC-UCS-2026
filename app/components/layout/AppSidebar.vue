<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/40 z-40"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Drawer -->
    <Transition name="slide">
      <nav
        v-if="open"
        class="fixed top-0 left-0 bottom-0 w-72 bg-white z-50 flex flex-col shadow-xl"
      >
        <!-- Drawer header -->
        <div class="flex items-center justify-between px-4 h-14 border-b border-gray-200">
          <div class="flex flex-col leading-tight">
            <span class="text-primary-500 font-bold text-xl tracking-wide">UCS</span>
            <span class="text-[9px] text-gray-500 uppercase tracking-wider leading-none">
              Universidade de Caxias do Sul
            </span>
          </div>
          <button
            class="p-2 text-gray-500 hover:text-gray-800 transition-colors"
            @click="$emit('close')"
          >
            <FontAwesomeIcon :icon="['fas', 'times']" class="text-lg" />
          </button>
        </div>

        <!-- User info -->
        <div class="px-4 py-4 border-b border-gray-100">
          <p class="font-semibold text-gray-800 text-sm">{{ user.fullName }}</p>
          <p class="text-xs text-gray-500">{{ user.matricula }}</p>
        </div>

        <!-- Nav items -->
        <div class="flex-1 overflow-y-auto py-2">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.label"
            :to="item.to"
            class="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            :class="{ 'bg-primary-50 text-primary-700 font-medium': isActive(item.to) }"
            @click="$emit('close')"
          >
            <FontAwesomeIcon :icon="['fas', item.icon]" class="w-4 text-center" />
            <span>{{ item.label }}</span>
          </NuxtLink>

          <!-- Disciplinas section -->
          <div class="mt-3 pt-3 border-t border-gray-100">
            <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Minhas Disciplinas
            </p>
            <NuxtLink
              v-for="course in courses"
              :key="course.id"
              :to="`/disciplina/${course.id}`"
              class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              :class="{ 'bg-primary-50 text-primary-700 font-medium': route.path === `/disciplina/${course.id}` }"
              @click="$emit('close')"
            >
              <FontAwesomeIcon :icon="['fas', 'book']" class="w-4 text-center text-xs" />
              <span class="truncate">{{ course.code }} - {{ course.name }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-t border-gray-200 p-4">
          <button class="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 transition-colors w-full">
            <FontAwesomeIcon :icon="['fas', 'sign-out-alt']" class="w-4 text-center" />
            <span>Sair</span>
          </button>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
}>()

defineEmits<{
  close: []
}>()

const route = useRoute()
const { user } = useUser()
const { courses } = useCourses()

const menuItems = [
  { label: 'Início', icon: 'home', to: '/' },
  { label: 'Arquivos', icon: 'folder', to: '/arquivos' },
  { label: 'Grade de Notas', icon: 'chart-bar', to: '#' },
  { label: 'Configurações', icon: 'cog', to: '#' },
]

function isActive(to: string) {
  if (to === '#') return false
  return route.path === to
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
