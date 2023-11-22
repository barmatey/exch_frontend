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
                <component
                    :is="component[selectedItem.title]"
                    :orders="orders"
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
import {ref, Ref} from "vue";

const order = (): Order => ({
    account: TEMP_ACC_ID,
    ticker: 'OIL',
    price: Math.round(Math.random() * 1000),
    quantity: 100,
    dtype: 'LIMIT',
    direction: 'BUY',
})
const orders: Order[] = [order(), order(), order(), order(), order()]
const sideItems: Ref<SideMenuItem[]> = ref([
    {title: "Orders", isSelected: true},
    {title: "Transactions", isSelected: false},
    {title: "Deals", isSelected: false},
])

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

}
</style>