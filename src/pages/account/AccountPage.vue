<template>
    <div class="account-page-wrapper">
        <div class="content">
            <div class="account-area">
                <account-window/>
            </div>
            <div class="sidebar-area">
                <side-menu
                    :items="sideItems"
                    @onSelect="(item) => handleSelectingSideMenuItem(item)"
                />
            </div>

            <div class="table-area">
                <order-list
                    :orders="orders"
                    @onCancel="handleCancelOrder"
                />
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import AccountWindow from "./AccountWindow.vue";
import {OrderList} from "../../elements/order-list";
import {TransactionList} from "../../elements/transaction-list";
import {Order, OrderDirection, OrderType} from "../../elements/order-list/domain";
import {Id, TEMP_ACC_ID, Ticker} from "../../core";
import SideMenu from "../../elements/side-menu/SideMenu.vue";
import {SideMenuItem} from "../../elements/side-menu/domain";
import {onMounted, ref, Ref} from "vue";
import {Transaction} from "../../elements/transaction-list/domain";
import {OrderGateway} from "../../elements/order-list/gateway";


const orders: Ref<Order[]> = ref([])
const orderGW = new OrderGateway()

async function handleCancelOrder(order: Order) {
    await orderGW.cancelOrder(order)
    orders.value = orders.value.filter(item => item.id != order.id)
}

onMounted(async () => {
    orders.value = await orderGW.getAccountOrders(TEMP_ACC_ID)
})


const sideItems: Ref<SideMenuItem[]> = ref([
    {title: "Orders", isSelected: true},
    {title: "Transactions", isSelected: false},
    {title: "Deals", isSelected: false},
])


const transactions: Transaction[] = [{date: new Date(), price: 13, quantity: 100}]
const selectedItem = ref(sideItems.value[0])

const component = {
    Orders: OrderList,
    Transactions: TransactionList,
}

function handleSelectingSideMenuItem(item: SideMenuItem) {
    sideItems.value.forEach(x => {
        x.title === item.title
            ? x.isSelected = true
            : x.isSelected = false
    })
    selectedItem.value = item
}
</script>

<style scoped>
.account-page-wrapper {
    width: 100vw;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    display: grid;
    grid-template-areas:
        'corner account'
        'sidebar table';
    grid-template-columns: 120px 800px 120px;
    grid-gap: 48px;
}

.account-area {
    grid-area: account;
}

.sidebar-area {
    grid-area: sidebar;
}


.table-area {
    grid-area: table;
    max-height: calc(100vh - 270px);

}
</style>