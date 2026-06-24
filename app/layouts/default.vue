<template>
  <div class="min-h-screen bg-[#f0f0f0] flex flex-col">
    <LayoutAppHeader @toggle-sidebar="sidebarOpen = true" />
    <LayoutAppSidebar :open="sidebarOpen" @close="sidebarOpen = false" />

    <main class="flex-1 mx-auto max-w-5xl w-full px-4 py-6">
      <slot />
    </main>

    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts">
const sidebarOpen = ref(false)
</script>
