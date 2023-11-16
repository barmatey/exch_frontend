<template>
    <div class="model-list-grid-wrapper model-list-width">
        <slot/>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@media screen and (min-width: 960px) {
    .model-list-width {
        width: 960px;
    }
}

.model-list-grid-wrapper {
    display: flex;
    flex-wrap: wrap;
}
</style>