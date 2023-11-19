<template>
    <div class="order-book">
        <div class="order-book-window">
            <book-side :orderBookSide="orderBook.buyLevel" title="Buy offers"/>
            <book-side :orderBookSide="orderBook.sellLevel" title="Sell offers"/>
            <div></div>
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
}

.order-book-window {
    border: 1px solid black;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 300px 300px 150px;
}

.new-order-window {

}

</style>