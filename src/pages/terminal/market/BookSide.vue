<template>
    <div class="bs-grid-wrapper">
        <div>Price</div>
        <div>Quantity</div>
        <div>Amount</div>
        <div
            v-for="[price, quantity] in orderBookSide.entries()"
            style="display: contents"
        >
            <div>{{ price }}</div>
            <div>{{ quantity }}</div>
            <div>{{ price * quantity }}</div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";

const p = defineProps<{
    orderBookSide: Map<number, number>,
    title: string,
}>()

</script>

<style scoped>
.bs-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>