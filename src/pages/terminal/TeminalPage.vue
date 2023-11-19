<template>
    <div class="terminal-grid-wrapper">
        <div class="content">
            <commodity-map style="margin-bottom: 12px;"/>
            <o-book :orderBook="orderBook" :gateway="gateway"/>
        </div>
        <transaction-history :transactions="transactions"/>
    </div>
</template>

<script setup lang="ts">
import TransactionHistory from "./market/TransactionHistory.vue";
import {OrderBookGateway} from "./market/gateway";
import {Ref, ref} from "vue";
import {createOrderBook, OrderBook, Transaction} from "./market/domain";
import {OBook} from "./market";
import {CommodityMap} from "./commodity";

const gateway = new OrderBookGateway()
const orderBook: Ref<OrderBook> = ref(createOrderBook("OIL"))
const transactions: Ref<Transaction[]> = ref([])
gateway.createWebsocket(orderBook, transactions)

</script>

<style scoped>
.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 400px;
    width: 100vw;
    height: 100vh;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>