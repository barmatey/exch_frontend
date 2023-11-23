<template>
<div class="terminal terminal-grid-wrapper">
    <div></div>
    <create-order/>
    <transaction-list :transactions="transactions" style="height: 500px;"/>
</div>
</template>

<script setup lang="ts">
import {TransactionList, TransactionRepo} from "../../elements/transaction-list/";
import {onMounted, Ref, ref} from "vue";
import {Transaction} from "../../elements/transaction-list/domain";
import {CreateOrder} from "../../elements/order-list/";

const ticker = 'OIL'

const trsRepo = new TransactionRepo()
const transactions: Ref<Transaction[]> = ref([])

onMounted(async () => {
    transactions.value = await trsRepo.getTickerTransactions(ticker)
})
</script>

<style scoped>
.terminal{

}
.terminal-grid-wrapper{
    display: grid;
    grid-template-columns: 1fr 600px max-content;
    grid-gap: 24px;
}
</style>