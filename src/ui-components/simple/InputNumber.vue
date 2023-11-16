<template>
    <input
        class="ui-input-base simple-input"
        type="number"
        :value="value"
        :placeholder="placeholder"
        @input.passive="(event) => handleInput(event.target.value)"
    />

</template>

<script setup lang="ts">
import {defineEmits} from "vue";

interface P {
    value?: number,
    placeholder?: string,
}

withDefaults(defineProps<P>(), {
    placeholder: "",
})

const e = defineEmits(['onInput'])

function handleInput(value: string | null | undefined){
    if (value === null || value === undefined || value === '') {
        e("onInput", null)
        return
    }
    e("onInput", Number(value))
}

</script>

<style scoped>
@import "../css/blue/ui-inputs.css";

.simple-input {
    width: 0;
    min-width: 100%;
}
</style>