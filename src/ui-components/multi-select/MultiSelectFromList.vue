<template>
    <div>
        <div v-for="item in items" :key="item[labelKey]">
            <input
                class="custom-checkbox"
                type="checkbox"
                :checked="item[isSelectedKey]"
                :id="item[labelKey]"
                @input="clickOnItem(item)"
            />
            <label class="form-check-label" :for="item[labelKey]"> {{ item[labelKey] }} </label>
        </div>
    </div>
</template>

<script setup lang="ts">

type Obj = {
    [index: string]: any
}

const p = defineProps<{
    items: Obj[],
    labelKey: string,
    isSelectedKey: string,
}>()

function clickOnItem(item: Obj): void {
    item[p.isSelectedKey] = !item[p.isSelectedKey]
}

</script>

<style scoped>
@import "./custom-checkbox.style.css";
</style>