<template>
    <div class="terminal terminal-grid-wrapper">
        <div></div>
        <div>
            <level-two :ticker="ticker"/>
            <create-order :ticker="ticker"/>
            <order-list :orders="accountOrders" style="height: 200px; width: 600px; margin-top: 24px"/>
        </div>
        <transaction-list :transactions="transactions" style="height: calc(100vh - 60px);"/>

    </div>
</template>

<script setup lang="ts">
import {TransactionList, TransactionRepo} from "../../elements/transaction-list/";
import {onMounted, Ref, ref} from "vue";
import {Transaction} from "../../elements/transaction-list/domain";
import {CreateOrder, OrderList} from "../../elements/order-list/";
import {LevelTwo} from "../../elements/level2/";
import {Order} from "../../elements/order-list/domain";

const ticker = 'OIL'

const transactions: Ref<Transaction[]> = ref([])
const accountOrders: Ref<Order[]> = ref([])

onMounted(async () => {
    const trsRepo = new TransactionRepo()
    transactions.value = await trsRepo.getTickerTransactions(ticker)
})
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