<template>
    <div>
        <div v-for="[value, label] in Object.entries(radio)">
            <input
                class="custom-radio"
                type="radio"
                :id="'MyRadio'+value"
                :checked="selectedValue === value"
                @input="$emit('radioInput', value)"
            >
            <label
                class="form-check-label"
                :for="'MyRadio'+value"
            >
                {{ label }}
            </label>
        </div>

    </div>
</template>

<script setup lang="ts">
defineProps<{
    radio: object,
    selectedValue: string,
}>()


</script>

<style scoped>
.custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

/* для элемента label связанного с .custom-radio */
.custom-radio + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
}

/* создание в label псевдоэлемента  before со следующими стилями */
.custom-radio + label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}



/* стили для активной радиокнопки (при нажатии на неё) */
.custom-radio:not(:disabled):active + label::before {
    background-color: var(--ui-main-color-primary);
    border-color: var(--ui-main-color-primary);
}


/* стили для радиокнопки, находящейся в состоянии checked */
.custom-radio:checked + label::before {
    border-color: var(--ui-main-color-primary);
    background-color: var(--ui-main-color-primary);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

/* стили для радиокнопки, находящейся в состоянии disabled */
.custom-radio:disabled + label::before {
    background-color: #e9ecef;
}
</style>