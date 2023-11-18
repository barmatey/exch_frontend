<template>
    <div class="terminal-grid-wrapper">
        <div>content</div>
        <transaction-history :transactions="transactions"/>
    </div>
</template>

<script setup lang="ts">
import TransactionHistory from "./transactions/TransactionHistory.vue";
import {OrderBookGateway} from "./market/gateway";
import {createOrderBook, OrderBook, Transaction} from "./market/domain";
import {Ref, ref} from "vue";

const gateway = new OrderBookGateway()
const orderBook: Ref<OrderBook> = ref(createOrderBook("OIL"))
const transactions: Ref<Transaction[]> = ref([])
gateway.createWebsocket(orderBook, transactions)

</script>

<style scoped>
.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 300px;
    width: 100vh;
    height: 100vh;
}
</style>