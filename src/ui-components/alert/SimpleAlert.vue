<template>
    <div
        v-if="alert.show"
        class="alert-flex-wrapper"
        :class="{'success': alert.color === 1, 'error': alert.color === 2}"
        v-click-away="handleClickOnClose"
    >
        <div class="ui-fs-3">
            {{ alert.message }}
        </div>
        <div class="close-button" @click="handleClickOnClose">
            &#10006;
        </div>
    </div>
</template>


<script setup lang="ts">
import {Alert} from "./types";
import {useAlertStore} from "./alert.store";
import {computed, ComputedRef, onBeforeUnmount} from "vue";

const store = useAlertStore()
const alert: ComputedRef<Alert> = computed(() => store.alert)

function handleClickOnClose() {
    store.clear()
}

onBeforeUnmount(() => store.clear())

</script>

<style scoped>
.alert-flex-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    width: 100vw;
    position: absolute;
    top: 38px;
    z-index: 11;
}

.close-button {
    user-select: none;
    cursor: pointer;
    color: var(--ui-main-color-primary-pressed);
    margin-left: 18px;
}


.success {
    background: var(--ui-main-color-green);
}

.error {
    background: var(--ui-main-color-red-light);
}
</style>
