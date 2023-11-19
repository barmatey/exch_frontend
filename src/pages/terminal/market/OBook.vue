<template>
    <div class="order-book-window">
        <book-side :orderBookSide="orderBook.buyLevel" title="Buy offers"/>
        <book-side :orderBookSide="orderBook.sellLevel" title="Sell offers"/>
       <new-order :gateway="gateway"/>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {OrderBook} from "/src/pages/terminal/domain";
import NewOrder from "./NewOrder.vue";
import BookSide from "./BookSide.vue";
import {OrderBookGateway} from "./gateway";

const p = defineProps<{
    orderBook: OrderBook,
    gateway: OrderBookGateway,
}>()

</script>


<style scoped>
.order-book-window {
    border: 1px solid black;
    display: grid;
    grid-template-columns: 300px 300px 200px;
    height: 400px;
}

.new-order-window {

}

</style>