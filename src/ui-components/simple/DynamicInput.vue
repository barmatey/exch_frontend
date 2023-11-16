<template>
      <span
          class="input input-wrap"
          role="textbox"
          contenteditable
          @input.passive="$emit('onInput', $event.target.outerText)"
      >
          {{ value }}
      </span>
</template>

<script setup lang="ts">
import {defineEmits} from "vue";

defineProps<{
    value: string,
}>()
defineEmits(['onInput'])

</script>

<style scoped>
@import "../css/main/ui-main-colors.css";

.input-wrap {
    height: 30px;
    border: 1px solid var(--ui-main-color-primary);
    padding: 3px 6px;
    border-radius: 24px;
}

.input-wrap:active, :hover, :focus {
    border: 1px solid var(--ui-main-color-primary);
    outline: none;
}
</style>