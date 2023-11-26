<template>
    <div>
        <div class="level2">
            <level-side
                :side="orderBook.buyers"
                style="border-right: 1px solid black"
                title="Buy offers"
            />
            <level-side
                :side="orderBook.sellers"
                title="Sell offers"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps, Ref, ref, watch} from "vue";
import LevelSide from "./LevelSide.vue";
import {OrderBook} from "./domain";
import {Ticker} from "../../core";
import {OrderBookGateway} from "./gateway";

const p = defineProps<{
    ticker: Ticker,
}>()

const orderBook: Ref<OrderBook> = ref({ticker: p.ticker, buyers: new Map(), sellers: new Map()})
const gateway = new OrderBookGateway()
gateway.createWebsocket(orderBook)

watch(p, () => {
    gateway.destroyWebsocket()
    orderBook.value.ticker = p.ticker
    gateway.createWebsocket(orderBook)
})
</script>

<style scoped>
.level2 {
    width: max-content;
    height: 400px;
    border-radius: 6px;
    background: var(--ui-main-color-blue-0);
    display: flex;
}
</style>