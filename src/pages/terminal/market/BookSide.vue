<template>
    <div class="book-side">
        <div class="book-side-header">
            {{ title }}
        </div>
        <div class="book-side-grid-wrapper">
            <div class="subtitle-item">Price</div>
            <div class="subtitle-item">Quantity</div>
            <div class="subtitle-item">Amount</div>
            <div
                v-for="[price, quantity] in orderBookSide.entries()"
                style="display: contents"
            >
                <div class="item">{{ price }}</div>
                <div class="item">{{ quantity }}</div>
                <div class="item">{{ price * quantity }}</div>
            </div>
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

.book-side {
    border-right: 1px solid black;

}

.book-side-header {
    padding: 3px 6px;
    font-size: 18px;
}

.book-side-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.subtitle-item {
    border-bottom: 1px solid black;
    padding: 3px 6px;
}

.item {
    padding: 0 6px;
}
</style>