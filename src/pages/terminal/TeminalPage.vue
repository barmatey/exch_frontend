<template>
    <div class="terminal terminal-grid-wrapper">
        <commodity-window class="commodity-window" @onSelect="(x) => handleCommodityChanged(x)"/>
        <div>
            <level-two :ticker="ticker"/>
            <create-order :ticker="ticker"/>
            <transaction-list :ticker="ticker" style="height: calc(100vh - 614px); margin-top: 24px;"/>

        </div>
        <div>
            <order-list style="height: calc(50vh - 80px)"/>
            <deal-list style="height: calc(50vh - 80px); margin-top: 24px"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {TransactionList} from "../../elements/transaction-list/";
import {CreateOrder, OrderList} from "../../elements/order-list/";
import {CommodityWindow, Commodity} from "../../elements/commodity-window/";
import {LevelTwo} from "../../elements/level2/";
import {ref} from "vue";
import DealList from "../../elements/deal-list/DealList.vue";

const ticker = ref('SGA')

function handleCommodityChanged(commodity: Commodity) {
    console.log(commodity)
    ticker.value = commodity.ticker
}

</script>

<style scoped>
.terminal {
    margin: 24px;
}

.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 600px max-content;
    grid-gap: 48px;
}

.commodity-window {
    display: flex;
    justify-content: end;
}
</style>