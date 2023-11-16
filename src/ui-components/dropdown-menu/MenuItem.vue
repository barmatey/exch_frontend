<template>
    <div class="menu-item">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.menu-item {
    padding: 3px 12px;
}

.menu-item:hover {
    background: var(--ui-main-color-outline-pressed);
    cursor: default;
}

</style>