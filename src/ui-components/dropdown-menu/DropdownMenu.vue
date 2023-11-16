<template>
    <div class="menu-wrapper">
        <div @click="clickOnToggle()" v-click-away="clickAnywhereWithOpenDropdownMenu">
            <slot name="icon"/>
        </div>

        <div v-if="isDropdown">
            <slot name="items">
                Past menu item here
            </slot>
        </div>
    </div>

</template>

<script setup lang="ts">
import {ref, Ref} from "vue";

const isDropdown: Ref<boolean> = ref(false)

function clickOnToggle() {
    isDropdown.value = !isDropdown.value
}

function clickAnywhereWithOpenDropdownMenu() {
   isDropdown.value = false
}

</script>

<style scoped>

.menu-wrapper {
    height: 100%;
}


</style>