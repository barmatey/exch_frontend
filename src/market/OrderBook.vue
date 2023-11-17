<template>
    <div class="order-book">
        <div class="order-book-window">
            <book-side :orderBookSide="orderBook.buyLevel" title="Buy offers"/>
            <book-side :orderBookSide="orderBook.sellLevel" title="Sell offers"/>
        </div>
        <div class="new-order-window">
            <new-order :orderBookGateway="orderBookGateway" side="Buy"/>
            <new-order :orderBookGateway="orderBookGateway" side="Sell"/>
        </div>
    </div>

</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import {OrderBook} from "./domain";
import {OrderBookGateway} from "./gateway";
import NewOrder from "./NewOrder.vue";
import BookSide from "./BookSide.vue";

const orderBook: Ref<OrderBook> = ref(OrderBook("OIL"))

const orderBookGateway = new OrderBookGateway()
orderBookGateway.createWebsocket(orderBook)
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