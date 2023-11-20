<template>
    <div class="terminal-grid-wrapper terminal-page">
        <commodity-map/>
        <div class="content">
            <o-book :orderBook="orderBook" :gateway="gateway"/>
        </div>
        <transaction-history :transactions="transactions"/>
    </div>
</template>

<script setup lang="ts">
import TransactionHistory from "./market/TransactionHistory.vue";
import {OrderBookGateway} from "./market/gateway";
import {computed, Ref, ref, watch} from "vue";
import {createOrderBook, OrderBook, Transaction} from "./market/domain";
import {OBook} from "./market";
import {CommodityMap} from "./commodity";
import {useTerminalStore} from "./store";

const gateway = new OrderBookGateway()
const orderBook: Ref<OrderBook> = ref(createOrderBook("OIL"))
const transactions: Ref<Transaction[]> = ref([])
gateway.createWebsocket(orderBook, transactions)

const store = useTerminalStore()
const target = computed(() => store.selectedCommodity)
watch(target, () => {
    gateway.destroyWebsocket()
    orderBook.value = createOrderBook(target.value.ticker)
    transactions.value = []
    gateway.createWebsocket(orderBook, transactions)
})

</script>

<style scoped>
.terminal-page {
    height: calc(100vh - 48px);
}

.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 240px 1fr 400px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
}
</style>