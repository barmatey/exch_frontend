<template>
<div>
    <transaction-list :transactions="transactions"/>
</div>
</template>

<script setup lang="ts">
import {TransactionList, TransactionRepo} from "../../elements/transaction-list/";
import {onMounted, Ref, ref} from "vue";
import {Transaction} from "../../elements/transaction-list/domain";

const ticker = 'OIL'

const trsRepo = new TransactionRepo()
const transactions: Ref<Transaction[]> = ref([])

onMounted(async () => {
    transactions.value = await trsRepo.getTickerTransactions(ticker)
})
</script>

<style scoped>

</style>