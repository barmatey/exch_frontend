<template>
    <div class="order-book">
        <div class="order-book-window">
            <book-side :orderBookSide="orderBook.buyLevel" title="Buy offers"/>
            <book-side :orderBookSide="orderBook.sellLevel" title="Sell offers"/>
        </div>
        <div class="new-order-window">
            <new-order :orderBookGateway="gateway" side="Buy"/>
            <new-order :orderBookGateway="gateway" side="Sell"/>
        </div>
    </div>

</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {OrderBook} from "/src/pages/terminal/domain";
import NewOrder from "./NewOrder.vue";
import BookSide from "./BookSide.vue";
import {OrderBookGateway} from "../gateway";

const p = defineProps<{
    orderBook: OrderBook,
    gateway: OrderBookGateway,
}>()

</script>


<style scoped>
.order-book {
    color: var(--ui-main-color-white);
}

.order-book-window {
    width: max-content;
    height: 400px;
    background: var(--ui-main-color-primary);
    display: flex;
    border: 1px solid var(--ui-main-color-primary-hover);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.new-order-window {
    width: max-content;
    height: max-content;
    background: var(--ui-main-color-primary);
    display: flex;
    align-items: center;
    border: 1px solid var(--ui-main-color-primary-hover);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

</style>