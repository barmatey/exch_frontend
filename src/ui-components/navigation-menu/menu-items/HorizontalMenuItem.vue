<template>
    <div
        class="menu-item"
        :class="{'item-hover': isHover, 'item-active': isActive}"
        @mouseenter="isHover=true"
        @mouseleave="isHover=false"
    >
        {{ item }}
    </div>
</template>

<script setup lang="ts">

import {ref, Ref} from "vue";

const p = defineProps<{
    item: string,
    isActive: boolean,
}>()

const isHover: Ref<boolean> = ref(false)

</script>

<style scoped>
.menu-item {
    padding: 6px 12px;
    cursor: pointer;
    height: fit-content;
    color: var(--ui-main-color-white);
}

.item-hover {
    background: var(--ui-main-color-outline-pressed);
}

.item-active {
    background: var(--ui-main-color-green);
}
</style>