<template>
    <input
        class="ui-input-base simple-input"
        type="date"
        :value="convertedValue"
        @input.passive="(event) => handleInput(event.target.value)"
    />

</template>

<script setup lang="ts">
import {computed, defineEmits} from "vue";
import {MyDate} from "../../shared/my-date";

const p = defineProps<{
    value: MyDate | null | undefined
}>()

const convertedValue = computed(() => {
    if (p.value) {
        return p.value.convertToString()
    }
    return ''
})

const e = defineEmits(['onInput'])

function handleInput(value: string) {
    const result = value && new MyDate(value) > new MyDate('1800-01-01')
        ? new MyDate(value)
        : null
    if (result !== null) {
        e('onInput', result)
    }
}

</script>

<style scoped>
@import "../css/blue/ui-inputs.css";

.simple-input {
    width: 0;
    min-width: 100%;
}
</style>