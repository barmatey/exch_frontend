<template>
    <div class="new-order">
        <div style="padding: 6px 12px">
            <div class="new-order-title">
                New order
            </div>
            <div>
                <label class="order-label">Price:</label>
                <input type="number" v-model="order.price"/>
            </div>
            <div>
                <label class="order-label">Quantity:</label>
                <input type="number" v-model="order.quantity"/>
            </div>
            <button
                @click="sendOrder('BUY')"
                style="background: var(--ui-main-color-green); margin-top: 24px"
            >
                Buy
            </button>
            <button
                @click="sendOrder('SELL')"
                style="background: var(--ui-main-color-red); margin-top: 6px"
            >
                Sell
            </button>

        </div>

    </div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {OrderBookGateway} from "../gateway";
import {Order, OrderDirection} from "./domain";
import {TEMP_ACC_ID} from "../../../core";
import {ref, Ref} from "vue";

const p = defineProps<{
    orderBookGateway: OrderBookGateway,
}>()


const order: Ref<Order> = ref({
    account: TEMP_ACC_ID,
    direction: "BUY",
    dtype: "LIMIT",
    price: 4,
    quantity: 1,
    ticker: "OIL",
})

async function sendOrder(direction: OrderDirection) {
    order.value.direction = direction
    await p.orderBookGateway.sendOrder(order.value)
}
</script>

<style scoped>
.new-order {
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    background: var(--ui-main-color-primary);
    border-radius: inherit;
}

.new-order-title{
    font-size: 18px;
    color: white;
    margin-bottom: 6px;
}

.order-label {
    display: block;
    height: 28px;
    color: var(--ui-main-color-blue-2);
    font-size: 14px;
    margin-top: 12px;
}

input {
    width: calc(100% - 12px);
    height: 40px;
    border: none;
    border-radius: 6px;
    margin-right: 6px;
    padding: 0 6px;
}

button {
    width: 100%;
    height: 40px;
    background: v-bind(buttonBkg);
    border: none;
    border-radius: 6px;
    margin-right: 6px;
    cursor: pointer;
}


</style>