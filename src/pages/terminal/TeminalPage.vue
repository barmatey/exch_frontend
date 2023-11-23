<template>
    <div class="terminal terminal-grid-wrapper">
        <div></div>
        <div>
            <level-two :orderBook="orderBook"/>
            <create-order/>
        </div>
        <transaction-list :transactions="transactions" style="height: calc(100vh - 60px);"/>

    </div>
</template>

<script setup lang="ts">
import {TransactionList, TransactionRepo} from "../../elements/transaction-list/";
import {onMounted, Ref, ref} from "vue";
import {Transaction} from "../../elements/transaction-list/domain";
import {CreateOrder} from "../../elements/order-list/";
import {LevelTwo} from "../../elements/level2/";
import {OrderBook} from "../../elements/level2/domain";

const ticker = 'OIL'

const trsRepo = new TransactionRepo()
const transactions: Ref<Transaction[]> = ref([])

const orderBook: Ref<OrderBook> = ref({buyers: new Map(), sellers: new Map()})
orderBook.value.buyers.set(10, 100)
orderBook.value.sellers.set(15, 300)

onMounted(async () => {
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