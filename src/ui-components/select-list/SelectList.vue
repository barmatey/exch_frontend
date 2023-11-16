<template>
    <div>
        <div
            class="ui-input-base input-wrapper"
            @click="clickOnDropdown()"
        >
            <div class="input-text">
                {{ selected ? selected[labelKey] : null }}
            </div>
            <div class="dropdown-button">
                &#9660;
            </div>
        </div>

        <div
            class="dropdown-wrapper"
            v-if="toggleFlag"
        >
            <div
                v-for="item in selectObjects"
                class="dropdown-item"
                @click="selectDropdownItem(item)"
            >
                {{ item[labelKey] }}
            </div>
        </div>

        <click-anywhere
            v-if="toggleFlag"
            @onClick="clickAnywhereWithOpenDropdownMenu()"
        />
    </div>
</template>

<script setup lang="ts">
import {computed, ref, Ref} from "vue";
import {ClickAnywhere} from "../simple/";


type Obj = {
    [index: string]: any
}

interface P {
    selectObjects: Obj[],
    selectedValue?: string | number,
    valueKey: string,
    labelKey: string,
}

const p = defineProps<P>()

const emit = defineEmits<{
    (e: 'onChange', item: Obj): void
}>()

const selected: Ref<Obj | undefined> = computed(() => p.selectObjects.find(item => item[p.valueKey] === p.selectedValue))
const toggleFlag: Ref<boolean> = ref(false)

function selectDropdownItem(item: Obj) {
    emit('onChange', item)
}

function clickOnDropdown() {
    toggleFlag.value = !toggleFlag.value
    if (!toggleFlag.value) {
        dropDownIsOpen = false
    }
}

let dropDownIsOpen = false

function clickAnywhereWithOpenDropdownMenu() {
    if (toggleFlag.value && dropDownIsOpen) {
        toggleFlag.value = false
        dropDownIsOpen = false
    } else {
        dropDownIsOpen = true
    }

}

</script>

<style scoped>
@import "../css/blue/ui-inputs.css";
@import "../css/blue/ui-buttons.css";

.input-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    user-select: none;
}

.input-text {
    margin-left: 12px;
    margin-top: 6px;
    margin-bottom: 6px;
    user-select: none;
}


.dropdown-wrapper {
    border: 1px solid var(--ui-main-color-primary);
    border-radius: 10px;
    padding: 6px 12px;
    background: var(--ui-main-color-white);
    position: absolute;
    cursor: default;
    z-index: 999;
}


.dropdown-item:hover {
    background: var(--ui-main-color-outline-pressed);
    color: var(--ui-main-color-white)
}

.dropdown-button {
    height: 100%;
    color: var(--ui-main-color-primary);
    padding: 6px 12px;
    cursor: pointer;
    user-select: none;
}
</style>