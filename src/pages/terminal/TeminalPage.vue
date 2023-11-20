<template>
    <div class="terminal-grid-wrapper terminal-page">
        <commodity-map/>

        <div class="content">
            <o-book :orderBook="orderBook" :gateway="gateway"/>
            <!--            <transaction-history :transactions="transactions"/>-->
        {{store.selectedCommodity}}
        </div>
    </div>
</template>

<script setup lang="ts">
import TransactionHistory from "./market/TransactionHistory.vue";
import {OrderBookGateway} from "./market/gateway";
import {Ref, ref} from "vue";
import {createOrderBook, OrderBook, Transaction} from "./market/domain";
import {OBook} from "./market";
import {CommodityMap} from "./commodity";
import {useTerminalStore} from "./store";

const gateway = new OrderBookGateway()
const orderBook: Ref<OrderBook> = ref(createOrderBook("OIL"))
const transactions: Ref<Transaction[]> = ref([])
gateway.createWebsocket(orderBook, transactions)

const store = useTerminalStore()

</script>

<style scoped>
.terminal-page {
    height: calc(100vh - 48px);
}

.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 240px 1fr;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>