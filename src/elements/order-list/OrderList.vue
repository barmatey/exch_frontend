<template>
    <div class="table">
        <div style="position: relative">

            <div class="table-header table-grid-wrapper">
                <div class="table-column">Ticker</div>
                <div class="table-column">Direction</div>
                <div class="table-column">Price</div>
                <div class="table-column">Quantity</div>
                <div class="table-column">Type</div>
                <div class="table-column"></div>
            </div>
            <div class="table-grid-wrapper">
                <div v-for="order in orders" style="display: contents">
                    <div class="table-cell">{{ order.ticker }}</div>
                    <div class="table-cell">{{ order.direction }}</div>
                    <div class="table-cell">{{ order.price }}</div>
                    <div class="table-cell">{{ order.quantity }}</div>
                    <div class="table-cell">{{ order.dtype }}</div>
                    <div class="table-cell" style="text-align: center">
                        <button>Cancel</button>
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

onMounted(async () => {
    const gateway = new OrderGateway()
    orders.value = await gateway.getAccountOrders(TEMP_ACC_ID)
})

</script>

<style scoped>
.table {
    background: var(--ui-main-color-blue-excel);
    border: 2px solid var(--ui-main-color-blue-excel);
    border-radius: 6px;
    width: max-content;
    height: 100%;
    overflow: auto;
}

.table-header {
    height: max-content;
    background: var(--ui-main-color-blue-excel);
    position: sticky;
    top: 0;
}

.table-title {
    grid-column-start: 1;
    grid-column-end: 7;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: bold;

}

.table-column {
    padding: 6px 12px;
        font-weight: bold;

}

.table-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(5, calc((100% - 90px) / 5)) 90px;
    grid-row-gap: 2px;
}

.table-cell {
    padding: 6px 12px;
    background: white;
}
</style>