<template>
    <div class="account-page-wrapper">
        <div class="content">
            <account-window/>
            <order-list :orders="orders" style="margin-top: 24px;"/>
        </div>
    </div>

</template>

<script setup lang="ts">
import AccountWindow from "./AccountWindow.vue";
import {OrderList} from "../../elements/order-list";
import {Order, OrderDirection, OrderType} from "../terminal/market/domain";
import {Id, TEMP_ACC_ID, Ticker} from "../../core";

const order = (): Order => ({
    account: TEMP_ACC_ID,
    ticker: 'OIL',
    price: Math.round(Math.random() * 1000),
    quantity: 100,
    dtype: 'LIMIT',
    direction: 'BUY',
})
const orders: Order[] = [order(), order(), order(), order(), order()]
</script>

<style scoped>
.account-page-wrapper {
    width: 100vw;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    width: 800px;
}

</style>