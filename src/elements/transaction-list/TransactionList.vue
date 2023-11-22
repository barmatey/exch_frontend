<template>
    <div class="table">
        <div>
            <div class="table-title table-grid-wrapper">
                <div class="table-column">Date</div>
                <div class="table-column">Time</div>
                <div class="table-column">Price</div>
                <div class="table-column">Quantity</div>
            </div>
            <div class="table-grid-wrapper">
                <div v-for="trs in transactions" style="display: contents">
                    <div class="table-cell">{{ trs.date.toLocaleDateString("ru") }}</div>
                    <div class="table-cell">{{ trs.date.toLocaleTimeString("ru") }}</div>
                    <div class="table-cell">{{ trs.price }}</div>
                    <div class="table-cell">{{ trs.quantity }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {Transaction} from "./domain";

const p = defineProps<{
    transactions: Transaction[]
}>()
</script>

<style scoped>
.table {
    background: var(--ui-main-color-blue-excel);
    border: 2px solid var(--ui-main-color-blue-excel);
    border-radius: 6px;
    width: max-content;
}

.table-title {
    font-weight: bold;
    height: 40px;
    background: var(--ui-main-color-blue-excel);
}

.table-column {
    padding: 6px 12px;
}

.table-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 120px);
    grid-row-gap: 2px;
}

.table-cell {
    padding: 6px 12px;
    background: white;
}
</style>