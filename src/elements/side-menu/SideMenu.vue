<template>
    <div>
        <div
            v-for="item in items"
            class="side-item"
            :class="{'side-item-selected': item.isSelected}"
            @click="$emit('onSelect', item)"
        >
            {{ item.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import {SideMenuItem} from "./domain";

const p = defineProps<{
    items: SideMenuItem[],
}>()

const e = defineEmits<{
     (e: 'onSelect', item: SideMenuItem): void
}>()
</script>

<style scoped>
.side-item{
    width: 100%;
    height: 36px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 3px 6px;
    border-radius: 6px;
}

.side-item-selected{
    background: var(--ui-main-color-blue-excel);
}

.side-item:hover{
}
</style>