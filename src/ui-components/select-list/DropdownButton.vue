<template>
    <div
        class="dropdown"
        @click="$emit('onClick', $event)"
    >
        &#9660;
    </div>
</template>

<script setup lang="ts">
defineEmits<{
    (e: 'onClick', event: MouseEvent): void
}>()
</script>

<style scoped>
.dropdown {
    height: 100%;
    color: var(--ui-main-color-primary);
    padding: 6px 12px;
    cursor: pointer;
    user-select: none;
}
</style>