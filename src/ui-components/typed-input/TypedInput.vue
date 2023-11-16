<template>
    <input
        v-if="inputData.dtype==='DATE'"
        type="date"
        :value="inputData.toString().value"
        @input.passive="(event) => handleInput(event.target.value, 'DATE')"
    />

    <input
        v-else
        :value="inputData.value"
        @input.passive="(event) => handleInput(event.target.value, inputData.dtype)"
    />

</template>

<script setup lang="ts">
import {defineEmits} from "vue";
import {Dtype, TypedValue} from "../../shared/typed-value";


const p = defineProps<{
    inputData: TypedValue<any>,
}>()


const e = defineEmits<{
    (e: 'onInput', value: TypedValue<any>): void,
}>()


function handleInput(value: string, dtype: Dtype) {
    if (dtype === 'DATE' && (!new TypedValue(value, dtype).value)) {
        return
    }
    if (dtype === 'NUMBER') {
        if (value.at(-1) === ".") return;
        if (value.length === 1 && value[0] === "-") return;
    }
    e("onInput", new TypedValue(value, dtype))
}
</script>

<style scoped>

</style>