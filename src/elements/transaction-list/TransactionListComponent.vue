<template>
<transaction-list :transactions="transactions"/>
</template>

<script setup lang="ts">
import {TransactionRepo} from "./repository";
import {onMounted, ref, Ref} from "vue";
import {Transaction} from "./domain";
import {TEMP_ACC_ID} from "../../core";
import TransactionList from "./TransactionList.vue";

const trsRepo = new TransactionRepo()
const transactions: Ref<Transaction[]> = ref([])

onMounted(async () => {
    transactions.value = await trsRepo.getAccountTransactions(TEMP_ACC_ID)
})
</script>

<style scoped>

</style>