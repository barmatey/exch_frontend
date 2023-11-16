<template>
    <input
        class="ui-input-base simple-input"
        :value="value"
        :placeholder="placeholder"
        @input.passive="$emit('onInput', $event.target.value ? $event.target.value : null)"
    />

</template>

<script setup lang="ts">
import {defineEmits} from "vue";

interface P {
    value?: string,
    placeholder?: string,
}

withDefaults(defineProps<P>(), {
    placeholder: "",
})

defineEmits(['onInput'])


</script>

<style scoped>
@import "../css/blue/ui-inputs.css";

.simple-input {
    width: 0;
    min-width: 100%;
}
</style>