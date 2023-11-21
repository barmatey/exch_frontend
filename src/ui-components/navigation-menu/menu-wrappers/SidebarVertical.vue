<template>
    <div class="sidebar-wrapper">
        <div class="sidebar-col">
            <div class="ui-padding-4">
                <div class="ui-fc-white ui-fs-3">
                    Fedotov Accounting
                </div>
                <div class="ui-mt-4">
                    <div v-for="group in menuItems" class="ui-mt-4">
                        <div v-for="item  in group.children" class="ui-mt-2">
                            <c-submenu-item
                                :item="item"
                                :is-active="itemIsActive(item)"
                                @click="clickOnSubmenu(item)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-col">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
import {MenuItem, SubmenuItem} from "../menu-items/types";
import CSubmenuItem from "../menu-items/CSubmenuItem.vue"

const index = useRouter()

const p = defineProps<{
    menuItems: MenuItem[]
    selectedItemId: number,
}>()


function itemIsActive(item: SubmenuItem): boolean {
    return item.id === p.selectedItemId
}


function clickOnSubmenu(item: SubmenuItem): void {
    router.push(item.linkedRouteParams)
}
</script>


<style scoped>

.sidebar-wrapper {
    display: grid;
    grid-template-areas: 'sidebar content';
    grid-template-columns: 250px 1fr;
}

.sidebar-col {
    grid-area: sidebar;
    background: var(--ui-main-color-primary);
    height: 100vh;
    position: sticky;
    top: 0;
}

.content-col {
    grid-area: content;
    background: var(--ui-main-color-blue-0);
}
</style>