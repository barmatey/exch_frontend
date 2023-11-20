<template>
    <div class="commodity-info">
        <div class="commodity-title">
            <div>
                {{ commodity.description }}
            </div>
            <div class="last-price">
                <div style="width: 80px">
                    Last price:
                </div>
                <div style="width: 60px; text-align: right">
                    {{ lastPrice }}
                </div>
            </div>
        </div>


        <div class="contracts">
            <div class="contract-item">
                {{ commodity.ticker }}
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {Commodity} from "../commodity/domain";

const p = defineProps<{
    commodity: Commodity,
    lastPrice: number,
}>()
</script>

<style scoped>
.commodity-info {
    width: 800px;
    border: 1px solid var(--ui-main-color-primary);
    background: white;
}

.commodity-title {
    font-size: 24px;
    padding: 6px 12px 0;
    display: flex;
    justify-content: space-between;
}

.last-price {
    padding: 6px 12px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
}

.contracts {
    padding: 6px 12px;
}

.contract-item {
    height: 24px;
    width: 60px;
    color: white;
    background: var(--ui-main-color-primary);
    text-align: center;
    border-radius: 6px;
}
</style>