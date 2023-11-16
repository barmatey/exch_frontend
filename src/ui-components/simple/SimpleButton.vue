<template>
    <button>
        {{ buttonText }}
    </button>
</template>

<script setup lang="ts">
const p = defineProps<{
    buttonText: string
}>()
</script>

<style scoped>

</style>