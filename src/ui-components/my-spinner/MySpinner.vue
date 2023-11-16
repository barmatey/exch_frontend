<template>
    <div v-if="show" class="my-spinner">
         <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">
const p = defineProps<{
    show: boolean,
}>()
</script>

<style scoped>
.my-spinner{
}

.loader {
  width: 24px;
  height: 24px;
  position: relative;
  border: 3px solid #eee;
  border-radius: 100vw;
  border-top: 3px solid var(--ui-main-color-primary);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

</style>