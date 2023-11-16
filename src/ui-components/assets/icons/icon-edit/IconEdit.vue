<template>
    <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" :stroke="stroke" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script setup lang="ts">
interface Props {
    height?: string,
    width?: string,
    stroke?: string,
}

const p = withDefaults(defineProps<Props>(), {
    height: "18px",
    width: "18px",
    stroke: "#000000",
})
</script>

<style scoped>

</style>