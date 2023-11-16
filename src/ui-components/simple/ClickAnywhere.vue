<template>
    <div>
    </div>
</template>

<script setup lang="ts">
import {defineEmits, onBeforeUnmount, onMounted} from "vue";

const emit = defineEmits<{
    (e: 'onClick'): void
}>()

function onClick() {
    emit('onClick')
}

onMounted(() => document.addEventListener('click', onClick))
onBeforeUnmount(() => document.removeEventListener('click', onClick))

</script>

<style scoped>

</style>