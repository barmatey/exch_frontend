<template>
    <div>
        <div v-for="[key, value] in Object.entries(items)" :key="key">
            <input
                class="custom-checkbox"
                type="checkbox"
                :value="value"
                :checked="selectedItems[key]"
                :id="key"
                @input="clickOnItem(key)"
            />
            <label class="form-check-label" :for="key"> {{ key }} </label>
        </div>
    </div>
</template>

<script setup lang="ts">

type Obj = {
    [index: string]: any
}

const p = defineProps<{
    items: Obj,
    selectedItems: Obj,
}>()

function clickOnItem(key: string): void {
    p.selectedItems[key] = !p.selectedItems[key]
}

</script>

<style scoped>
@import "./custom-checkbox.style.css";
</style>