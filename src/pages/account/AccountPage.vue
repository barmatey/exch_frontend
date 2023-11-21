<template>
    <div class="account-page-wrapper">
        <div class="content">
            <div class="account-area">
                  <account-window/>
            </div>
            <div class="sidebar-area">
                sidebar
            </div>
           <div class="table-area">
               <order-list :orders="orders"/>
           </div>
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
    display: grid;
    grid-template-areas:
        'corner account'
        'sidebar table';
    grid-template-columns: 200px 800px 200px;
}

.account-area{
    grid-area: account;
}

.sidebar-area{
    grid-area: sidebar;
    margin-top: 24px;
}

.table-area{
    grid-area: table;
    margin-top: 24px;

}
</style>