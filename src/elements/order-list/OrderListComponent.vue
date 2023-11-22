<template>
    <order-list :orders="orders" @onCancel="handleCancelOrder"/>
</template>

<script setup lang="ts">
import OrderList from "./OrderList.vue";
import {onMounted, ref, Ref} from "vue";
import {Order} from "./domain";
import {OrderGateway} from "./gateway";
import {TEMP_ACC_ID} from "../../core";

const orders: Ref<Order[]> = ref([])
const gateway = new OrderGateway()

async function handleCancelOrder(order: Order) {
    await gateway.cancelOrder(order)
    orders.value = orders.value.filter(item => item.id != order.id)
}

onMounted(async () => {
    orders.value = await gateway.getAccountOrders(TEMP_ACC_ID)
})
</script>

<style scoped>

</style>