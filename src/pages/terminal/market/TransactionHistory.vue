<template>
    <div class="transaction-history">
        <div class="trs-grid-wrapper trs-table-header">
            <div class="trs-item">Date</div>
            <div class="trs-item">Time</div>
            <div class="trs-item">Price</div>
            <div class="trs-item">Quantity</div>
        </div>
        <div class="trs-grid-wrapper">
            <div
                v-for="trs in transactions.toReversed()"
                class="trs-item"
                style="display: contents"
            >
                <div> {{ trs.date.toLocaleDateString("ru") }}</div>
                <div>{{ trs.date.toLocaleTimeString("ru") }}</div>
                <div>{{ trs.price }}</div>
                <div>{{ trs.quantity }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {Transaction} from "../../../elements/order-list/domain";

const p = defineProps<{
    transactions: Transaction[],
}>()
</script>

<style scoped>
.transaction-history {
    background: var(--ui-main-color-blue-0);
    padding: 0 12px 6px;
    overflow: auto;
    max-height: 100vh;
    position: relative;
}

.trs-history-title {
    color: white;
    font-size: 16px;
    grid-column-start: 1;
    grid-column-end: 5;

}


.trs-table-header{
    background: inherit;
    position: sticky;
    top: 0;
}

.trs-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 66px);
    grid-column-gap: 24px;
}

.trs-item{
    color: black;
}

</style>