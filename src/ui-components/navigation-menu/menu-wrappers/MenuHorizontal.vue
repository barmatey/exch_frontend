<template>
    <div class="menu-wrapper">
        <div class="menu">
            <div class="brand">
                {{ brandText }}
            </div>

            <div class="main-menu">
                <div v-for="group in menuItems" class="group-item">
                    <h-menu-item
                        v-for="item  in group.children"
                        :item="item"
                        :is-active="itemIsActive(item)"
                        @click="clickOnSubmenu(item)"
                    />
                    <div class="divider"/>
                </div>
            </div>

            <div class="account logout-btn" @click="clickOnLogout">
                Logout
            </div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import {MenuItem, SubmenuItem} from "../menu-items/types";
import HMenuItem from "../menu-items/HMenuItem.vue";


const p = defineProps<{
    brandText: string
    menuItems: MenuItem[]
    selectedItemId: number,
}>()

const emit = defineEmits<{
    (e: 'onSubmenu', item: SubmenuItem): void,
    (e: 'onLogout'): void,
}>()

function itemIsActive(item: SubmenuItem): boolean {
    return item.id === p.selectedItemId
}

function clickOnSubmenu(item: SubmenuItem): void {
    emit('onSubmenu', item)
}

function clickOnLogout(): void {
    emit('onLogout')
}
</script>


<style scoped>

.menu-wrapper{
    overflow: hidden;
    background: var(--ui-main-color-blue-2);
}

.menu {
    height: 38px;
    width: 100%;
    display: grid;
    grid-template-areas: 'brand-area menu-area account-area';
    grid-template-columns: 180px 1fr max-content;
    align-content: center;
    background: var(--ui-main-color-primary);
    position: static;
    top: 0;
    z-index: 99999;
}

.brand {
    grid-area: brand-area;
    color: var(--ui-main-color-white);
    padding: 6px 12px;
}

.main-menu {
    grid-area: menu-area;
    display: flex;
    margin-left: 30px;
    margin-right: 48px;
}

.group-item {
    display: contents;
}

.divider {
    margin-left: 18px;
}


.account {
    grid-area: account-area;
    padding: 6px 0;
    margin-right: 6px;
    color: white;
}

.content {
    height: calc(100vh - 38px);
    overflow: auto;
    /*padding-top: 38px;*/
}

.logout-btn {
    cursor: pointer;
    padding: 6px 12px;
}

.logout-btn:hover {
    background: var(--ui-main-color-primary-hover);
}

</style>