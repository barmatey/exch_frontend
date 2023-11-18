<template>
    <div>
        <div class="level2-header">
            <div class="side-title">
                {{ title }}
            </div>
            <div class="level2-grid-wrapper header-part">
                <div class="table-item">
                    Price
                </div>
                <div class="table-item">
                    Quantity
                </div>
                <div class="table-item">
                    Amount
                </div>
            </div>
        </div>
        <div class="level2-content">
            <div class="level2-grid-wrapper" v-for="level in orderBookSide">
                <div class="order-info-item">
                    {{ level[0] }}
                </div>
                <div class="order-info-item">
                    {{ level[1] }}
                </div>
                <div class="order-info-item">
                    {{ level[0] * level[1] }}
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";

const p = defineProps<{
    orderBookSide: Map<number, number>,
    title: string,
}>()
</script>

<style scoped>

.level2-header {
    border-bottom: 1px solid black;
    padding: 0 12px;
}

.level2-content {
    padding: 0 12px;
}

.side-title {
    margin-bottom: 6px;
    font-size: 18px;
}

.level2-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.header-part{
    margin-bottom: 3px;
}

.table-item {
    font-size: 14px;
}

.order-info-item {
    margin-top: 3px;
}

</style>