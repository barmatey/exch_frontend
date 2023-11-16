<template>
    <div
        class="submenu-item"
        :class="{'submenu-item-selected': isActive, 'submenu-item-hover': isHover}"
        @mouseenter="isHover=true"
        @mouseleave="isHover=false"

    >
        {{ item.itemName }}
    </div>
</template>

<script setup lang="ts">
import {SubmenuItem} from "./types";
import {ref, Ref} from "vue";

const p = defineProps<{
    isActive: boolean,
    item: SubmenuItem,
}>()

const isHover: Ref<boolean> = ref(false)

</script>

<style scoped>
.submenu-item {
    color: var(--ui-main-color-white);
    margin-left: 18px;
    padding: 6px 12px;
    cursor: pointer;
    user-select: none;
}

.submenu-item-hover{
    background: var(--ui-main-color-primary-hover);
}

.submenu-item-selected {
    background: var(--ui-main-color-primary-hover);
    border-bottom: 2px solid var(--ui-main-color-red);
}
</style>