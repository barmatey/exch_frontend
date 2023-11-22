<template>
    <div class="table">
        <div style="position: relative">
            <div class="table-title table-grid-wrapper">
                <div class="table-column">Ticker</div>
                <div class="table-column">Direction</div>
                <div class="table-column">Price</div>
                <div class="table-column">Quantity</div>
                <div class="table-column">Type</div>
                <div class="table-column"></div>
            </div>
            <div class="table-grid-wrapper">
                <div v-for="order in orders" style="display: contents">
                    <div class="table-cell">{{ order.ticker }}</div>
                    <div class="table-cell">{{ order.direction }}</div>
                    <div class="table-cell">{{ order.price }}</div>
                    <div class="table-cell">{{ order.quantity }}</div>
                    <div class="table-cell">{{ order.dtype }}</div>
                    <div class="table-cell" style="text-align: center">
                        <button @click="$emit('onCancel', order)">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import {Order} from "./domain";

const p = defineProps<{
    orders: Order[]
}>()

const e = defineEmits<{
     (e: 'onCancel', item: Order): void
}>()
</script>

<style scoped>
.table {
    background: var(--ui-main-color-blue-excel);
    border: 2px solid var(--ui-main-color-blue-excel);
    border-radius: 6px;
    width: max-content;
    height: 100%;
    overflow: auto;
}

.table-title {
    font-weight: bold;
    height: 40px;
    background: var(--ui-main-color-blue-excel);
    position: sticky;
    top: 0;
}

.table-column{
    padding: 6px 12px;
}

.table-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 120px) 90px;
    grid-row-gap: 2px;
}

.table-cell {
    padding: 6px 12px;
    background: white;
}
</style>