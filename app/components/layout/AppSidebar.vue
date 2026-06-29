<template>
  <aside class="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 fixed top-0 left-0 bottom-0 z-30">
    <!-- Header -->
    <div class="flex items-center px-4 h-14 border-b border-gray-200">
      <NuxtLink to="/" class="flex flex-col leading-tight">
        <span class="text-primary-500 font-bold text-xl tracking-wide">UCS</span>
        <span class="text-[9px] text-gray-500 uppercase tracking-wider leading-none">
          Universidade de Caxias do Sul
        </span>
      </NuxtLink>
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
        >
          <FontAwesomeIcon :icon="['fas', 'book']" class="w-4 text-center text-xs" />
          <span class="truncate">{{ course.code }} - {{ course.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </aside>

  <!-- Mobile sidebar (drawer) -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 bg-black/40 z-40 lg:hidden"
        @click="$emit('closeMobile')"
      />
    </Transition>

    <Transition name="slide">
      <aside
        v-if="mobileOpen"
        class="fixed top-0 left-0 bottom-0 w-72 bg-white z-50 flex flex-col shadow-xl lg:hidden"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-4 h-14 border-b border-gray-200">
          <NuxtLink to="/" class="flex flex-col leading-tight" @click="$emit('closeMobile')">
            <span class="text-primary-500 font-bold text-xl tracking-wide">UCS</span>
            <span class="text-[9px] text-gray-500 uppercase tracking-wider leading-none">
              Universidade de Caxias do Sul
            </span>
          </NuxtLink>
          <button
            class="p-2 text-gray-500 hover:text-gray-800 transition-colors"
            @click="$emit('closeMobile')"
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
            @click="$emit('closeMobile')"
          >
            <FontAwesomeIcon :icon="['fas', item.icon]" class="w-4 text-center" />
            <span>{{ item.label }}</span>
          </NuxtLink>

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
              @click="$emit('closeMobile')"
            >
              <FontAwesomeIcon :icon="['fas', 'book']" class="w-4 text-center text-xs" />
              <span class="truncate">{{ course.code }} - {{ course.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  mobileOpen: boolean
}>()

defineEmits<{
  closeMobile: []
}>()

const route = useRoute()
const { user } = useUser()
const { courses } = useCourses()

const menuItems = [
  { label: 'Início', icon: 'home', to: '/' },
  { label: 'Arquivos', icon: 'folder', to: '/arquivos' },
]

function isActive(to: string) {
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
