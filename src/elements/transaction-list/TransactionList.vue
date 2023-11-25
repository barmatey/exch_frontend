<template>
    <div>
        <div class="table">
            <div>
                <div class="table-title table-grid-wrapper">
                    <div class="table-column">Date</div>
                    <div class="table-column">Time</div>
                    <div class="table-column">Price</div>
                    <div class="table-column">Quantity</div>
                </div>
                <div class="table-grid-wrapper">
                    <div v-for="trs in transactions.slice(0).reverse()" style="display: contents">
                        <div class="table-cell">{{ trs.date.toLocaleDateString("ru") }}</div>
                        <div class="table-cell">{{ trs.date.toLocaleTimeString("ru") }}</div>
                        <div class="table-cell">{{ trs.price }}</div>
                        <div class="table-cell">{{ trs.quantity }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {defineProps, onMounted, ref, Ref} from "vue";
import {Transaction} from "./domain";
import {Ticker} from "../../core";
import {TransactionGateway} from "./gateway";

const p = defineProps<{
    ticker: Ticker
}>()

const transactions: Ref<Transaction[]> = ref([])

onMounted(async () => {
    const gateway = new TransactionGateway()
    transactions.value = await gateway.getTickerTransactions(p.ticker)
    await gateway.createWebSocket(p.ticker, transactions)
})
</script>

<style scoped>
.table {
    background: var(--ui-main-color-blue-excel);
    border: 2px solid var(--ui-main-color-blue-excel);
    border-radius: 6px;
    width: max-content;
    height: 100%;
    overflow-y: scroll;
}

.table-title {
    font-weight: bold;
    height: 40px;
    background: var(--ui-main-color-blue-excel);
    position: sticky;
    top: 0;
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