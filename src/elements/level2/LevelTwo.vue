<template>
<div>
    <div class="level2">
        <level-side
            :side="orderBook.buyers"
            style="border-right: 1px solid black"
            title="Buy offers"
        />
        <level-side
            :side="orderBook.sellers"
            title="Sell offers"
        />
    </div>
</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import LevelSide from "./LevelSide.vue";
import {OrderBook} from "./domain";

const p = defineProps<{
    orderBook: OrderBook,
}>()
</script>

<style scoped>
.level2{
    width: max-content;
    height: 400px;
    border-radius: 6px;
    background: var(--ui-main-color-blue-excel);
    display: flex;
}
</style>