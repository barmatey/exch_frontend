<template>
    <div class="order-window">
        <div class="order-table-title">
            Orders
        </div>
        <div class="order-table" style="border-bottom: 1px solid black">
            <div class="table-cell">Ticker</div>
            <div class="table-cell">Direction</div>
            <div class="table-cell">Price</div>
            <div class="table-cell">Quantity</div>
            <div class="table-cell">Type</div>
            <div></div>
        </div>
        <div class="order-table">

            <div v-for="order in orders" style="display: contents">
                <div class="table-cell">{{ order.ticker }}</div>
                <div class="table-cell">{{ order.direction }}</div>
                <div class="table-cell">{{ order.price }}</div>
                <div class="table-cell">{{ order.quantity }}</div>
                <div class="table-cell">{{ order.dtype }}</div>
                <div style="text-align: center"><button>Cancel</button></div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {Order} from "../../pages/terminal/market/domain";

const p = defineProps<{
    orders: Order[]
}>()
</script>

<style scoped>
.order-window {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.order-table-title {
    padding: 0 6px;
    font-size: 18px;
    background: var(--ui-main-color-primary);
    color: white;
}

.order-table {
    display: grid;
    grid-template-columns: repeat(5, 1fr) 80px;
}

.table-cell {
    padding: 0 6px;
}
</style>