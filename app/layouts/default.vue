<template>
  <div class="min-h-screen bg-[#f0f0f0] flex">
    <LayoutAppSidebar :mobile-open="mobileOpen" @close-mobile="mobileOpen = false" />

    <!-- Main content area, offset on desktop to account for fixed sidebar -->
    <div class="flex-1 flex flex-col min-h-screen lg:ml-64">
      <LayoutAppHeader @toggle-sidebar="mobileOpen = true" />

      <main class="flex-1 mx-auto max-w-5xl w-full px-4 py-6">
        <slot />
      </main>

      <LayoutAppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
</script>
