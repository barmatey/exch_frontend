<template>
    <div class="table">
        <div style="position: relative">

            <div class="table-header table-grid-wrapper">
                <div class="table-title">Orders</div>
                <div class="table-column">Ticker</div>
                <div class="table-column">Direction</div>
                <div class="table-column">Price</div>
                <div class="table-column">Quantity</div>
                <div class="table-column">Type</div>
                <div class="table-column">Status</div>
                <div class="table-column"></div>
            </div>
            <div class="table-grid-wrapper">
                <div v-for="order in orders" style="display: contents">
                    <div class="table-cell">{{ order.ticker }}</div>
                    <div class="table-cell">{{ order.direction }}</div>
                    <div class="table-cell">{{ order.price }}</div>
                    <div class="table-cell">{{ order.quantity }}</div>
                    <div class="table-cell">{{ order.dtype }}</div>
                    <div class="table-cell">{{ order.status }}</div>
                    <div class="table-cell" style="text-align: center">
                        <button class="cancel-btn" @click="cancelOrder(order)">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {Order} from "./domain";
import {OrderGateway} from "./gateway";
import {TEMP_ACC_ID} from "../../core";

const orders: Ref<Order[]> = ref([])
const gateway = new OrderGateway()

async function cancelOrder(order: Order) {
    await gateway.cancelOrder(order)
    orders.value = orders.value.filter(item => item.id !== order.id)
}

onMounted(async () => {
    orders.value = await gateway.getAccountOrders(TEMP_ACC_ID)
    gateway.createWebsocket(orders, TEMP_ACC_ID)
})

</script>

<style scoped>
.table {
    background: var(--ui-main-color-white);
    border-radius: 6px;
    width: max-content;
    height: 100%;
    overflow: auto;
}

.table-header {
    height: max-content;
    background: var(--ui-main-color-white);
    position: sticky;
    top: 0;
    border-bottom: 1px solid black;
}

.table-title {
    grid-column-start: 1;
    grid-column-end: 8;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    font-weight: bold;
    font-size: 18px;

}

.table-column {
    padding: 6px 12px;

}

.table-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 84px) 90px;
    grid-row-gap: 2px;
}

.table-cell {
    padding: 6px 12px;
    background: white;
}

.cancel-btn {
    border: 1px solid var(--ui-main-color-primary);
    border-radius: 6px;
    background: white;
    cursor: pointer;
    padding: 0 6px;

}

.cancel-btn:hover {
    background: var(--ui-main-color-outline-pressed);
}
</style>