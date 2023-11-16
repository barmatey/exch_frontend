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
.submenu-item{
    cursor: pointer;
    padding: 6px 12px;
    color: var(--ui-main-color-white);
    user-select: none;
}

.submenu-item-hover{
    background: var(--ui-main-color-primary-hover);
}

.submenu-item-selected {
    background: var(--ui-main-color-primary-hover);
    border-left: 2px solid var(--ui-main-color-red);
}
</style>