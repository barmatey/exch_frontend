<template>
    <div class="terminal terminal-grid-wrapper">
        <div></div>
        <div>
            <level-two :ticker="ticker"/>
            <create-order :ticker="ticker" style="margin-top: 6px"/>
            <transaction-list :ticker="ticker" style="height: 200px; margin-top: 6px"/>

        </div>
        <order-list style="height: 300px; width: 600px;"/>
    </div>
</template>

<script setup lang="ts">
import {TransactionList} from "../../elements/transaction-list/";
import {CreateOrder} from "../../elements/order-list/";
import {LevelTwo} from "../../elements/level2/";
import OrderList from "../../elements/order-list/OrderList.vue";

const ticker = 'SGA'


</script>

<style scoped>
.terminal {
    margin: 24px;
}

.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 600px max-content;
    grid-gap: 24px;
}
</style>