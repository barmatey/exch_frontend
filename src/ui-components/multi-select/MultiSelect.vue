<template>
 <div>
        <div v-for="item in items">
            <input
                class="custom-checkbox"
                type="checkbox"
                :checked="item.isSelected"
                :id="item.label"
                @input="clickOnItem(item)"
            />
            <label class="form-check-label" :for="item.label"> {{ item.label }} </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import {MultiselectItem} from "./types";

const p = defineProps<{
    items: MultiselectItem[],
}>()

function clickOnItem(item: MultiselectItem): void {
    item.isSelected = !item.isSelected
}
</script>

<style scoped>
@import "./custom-checkbox.style.css";
</style>