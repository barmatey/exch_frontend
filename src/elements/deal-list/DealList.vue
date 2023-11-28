<template>
    <div class="table">
        <div style="position: relative">

            <div class="table-header table-grid-wrapper">
                <div class="table-title">Deals</div>
                <div class="table-column">Ticker</div>
                <div class="table-column">Direction</div>
                <div class="table-column">Avg. price</div>
                <div class="table-column">Quantity</div>
                <div class="table-column">Status</div>
                <div class="table-column"></div>
            </div>
            <div class="table-grid-wrapper">
                <div v-for="deal in deals" style="display: contents">
                    <div class="table-cell">{{ deal.ticker }}</div>
                    <div class="table-cell">{{ deal.type }}</div>
                    <div class="table-cell">{{ deal.avgPrice }}</div>
                    <div class="table-cell">{{ deal.quantity }}</div>
                    <div class="table-cell">{{ deal.status }}</div>
                    <div class="table-cell" style="text-align: center">
                        <button class="info-btn">More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import {Deal, DealStatus} from "./domain";
import {Id, Ticker} from "../../core";

const deals: Ref<Deal[]> = ref([
    {
        account: Id(null),
        type: "BUY",
        ticker: "Ticker",
        status: "PROCESSING",
        quantity: 400,
        avgPrice: 20,
    }
])
</script>


<style scoped>
.table {
    background: var(--ui-main-color-blue-0);
    border-radius: 6px;
    width: max-content;
    height: 100%;
    overflow-y: scroll;
}

.table-header {
    height: max-content;
    background: var(--ui-main-color-blue-0);
    position: sticky;
    top: 0;
    border-bottom: 1px solid black;
}

.table-title {
    grid-column-start: 1;
    grid-column-end: 7;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    font-weight: bold;
    font-size: 18px;

}

.table-column {
    padding: 6px 12px;

}

.table-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 96px) 120px 90px;
    grid-row-gap: 2px;
}

.table-cell {
    padding: 6px 12px;
}

.info-btn {
    border: 1px solid var(--ui-main-color-primary);
    border-radius: 6px;
    background: var(--ui-main-color-blue-0);
    cursor: pointer;
    padding: 0 6px;

}

.info-btn:hover {
    background: var(--ui-main-color-outline-pressed);
}

</style>