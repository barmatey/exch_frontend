<template>
    <span class="switch-wrapper">
        <label class="switch">
            <input type="checkbox" @input="$emit('onChange', !value)" :checked="value">
            <span class="slider"></span>
        </label>
    </span>
</template>

<script setup lang="ts">
const p = defineProps<{
    value: boolean
}>()

const emit = defineEmits<{
    (e: 'onChange', newValue: boolean): void
}>()
</script>

<style scoped>
@import "../css/main/ui-main-colors.css";

.switch-wrapper {
    height: 26px;
    margin-left: 3px;
}

.switch input {
    display: none;
}

.switch {
    display: inline-block;
    width: 36px; /*=w*/
    height: 18px; /*=h*/
    margin: 0 12px 0 0;
    transform: translateY(24%);
    position: relative;
}

.slider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 18px;
    box-shadow: 0 0 0 2px var(--ui-main-color-outline-pressed), 0 0 4px var(--ui-main-color-outline-pressed);
    cursor: pointer;
    border: 4px solid transparent;
    overflow: hidden;
    transition: 0.2s;
}

.slider:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--ui-main-color-outline-pressed);
    border-radius: 18px;
    transform: translateX(-18px); /*translateX(-(w-h))*/
    transition: 0.2s;
}

input:checked + .slider:before {
    transform: translateX(18px); /*translateX(w-h)*/
    background-color: var(--ui-main-color-primary);
}

input:checked + .slider {
    box-shadow: 0 0 0 2px var(--ui-main-color-primary), 0 0 2px var(--ui-main-color-primary);

}

</style>