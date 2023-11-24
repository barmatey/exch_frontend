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
                <component :is="components[selectedItem.title]"/>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import AccountWindow from "./AccountWindow.vue";
import {TransactionListComponent} from "../../elements/transaction-list";
import SideMenu from "../../elements/side-menu/SideMenu.vue";
import {SideMenuItem} from "../../elements/side-menu/domain";
import {ref, Ref} from "vue";


const sideItems: Ref<SideMenuItem[]> = ref([
    {title: "Orders", isSelected: true},
    {title: "Transactions", isSelected: false},
])

const components = {
    // "Orders": OrderListComponent,
    "Transactions": TransactionListComponent,
}
const selectedItem = ref(sideItems.value[0])


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