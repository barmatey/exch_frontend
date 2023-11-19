<template>
    <div class="terminal-grid-wrapper">
        <div class="content">
            <o-book :orderBook="orderBook" :gateway="gateway"/>
        </div>
        <transaction-history :transactions="transactions"/>
    </div>
</template>

<script setup lang="ts">
import TransactionHistory from "./transactions/TransactionHistory.vue";
import {OrderBookGateway} from "./gateway";
import {Ref, ref} from "vue";
import {createOrderBook, OrderBook, Transaction} from "./domain";
import OBook from "./market/OBook.vue";

const gateway = new OrderBookGateway()
const orderBook: Ref<OrderBook> = ref(createOrderBook("OIL"))
const transactions: Ref<Transaction[]> = ref([])
gateway.createWebsocket(orderBook, transactions)

</script>

<style scoped>
.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr max-content;
    width: 100vw;
    height: 100vh;
}

.content{
    display: flex;
    justify-content: center;
}
</style>