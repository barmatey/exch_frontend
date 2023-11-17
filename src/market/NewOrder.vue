<template>
    <div class="new-order" style="border-right: 1px solid var(--ui-main-color-primary-hover)">
        <div>
            <label class="order-label">Price</label>
            <input type="number"/>
        </div>
        <div>
            <label class="order-label">Quantity</label>
            <input type="number"/>
        </div>
        <div>
            <div class="order-label" style="height: 28px; width: 100%;"></div>
            <button>{{ side }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {OrderBookGateway} from "./gateway";

const p = defineProps<{
    orderBookGateway: OrderBookGateway,
    side: "Buy" | "Sell",
}>()

const buttonBkg = p.side === "Buy" ?  "var(--ui-main-color-green)" : "var(--ui-main-color-red)"
</script>

<style scoped>
.order-label {
    display: block;
    height: 28px;
    color: var(--ui-main-color-blue-2);
}

input {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 6px;
}

button {
    width: 72px;
    height: 40px;
    background: v-bind(buttonBkg);
    border: none;
    border-radius: 6px;
}

.new-order {
    width: 300px;
    padding: 6px 12px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
}
</style>