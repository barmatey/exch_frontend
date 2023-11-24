<template>
    <div class="terminal terminal-grid-wrapper">
        <div></div>
        <div>
            <level-two :ticker="ticker"/>
            <create-order :ticker="ticker"/>
        </div>
        <transaction-list :ticker="ticker" style="height: calc(100vh - 60px);"/>

    </div>
</template>

<script setup lang="ts">
import {TransactionList} from "../../elements/transaction-list/";
import {CreateOrder} from "../../elements/order-list/";
import {LevelTwo} from "../../elements/level2/";

const ticker = 'SGA'


</script>

<style scoped>
.terminal {

}

.terminal-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    grid-gap: 24px;
}
</style>