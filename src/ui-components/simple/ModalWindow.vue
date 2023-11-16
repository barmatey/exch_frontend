<template>
    <div class="modal-window-container" v-if="show" @click.self="handleClickAway">
        <div class="modal-window">
            <slot></slot>
        </div>
    </div>

</template>

<script setup lang="ts">

const p = defineProps<{
    show: boolean,
}>()

const e = defineEmits<{
    (e: 'onClose'): void,
}>()

function handleClickAway() {
    e("onClose")
}

</script>

<style scoped>
.modal-window-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(42, 50, 69, 0.8);
    z-index: 999;
}

.modal-window {

}
</style>