<template>
  <footer class="bg-white border-t border-gray-200 py-4 mt-8">
    <div class="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
      <div class="flex items-center gap-2">
        <span class="text-primary-500 font-bold text-sm">UCS</span>
        <span class="text-gray-300">|</span>
        <span>Universidade de Caxias do Sul</span>
      </div>
      <span>&copy; {{ year }} AVA UCS. Todos os direitos reservados.</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
