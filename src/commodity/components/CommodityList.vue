<template>
    <div class="commodity-window">
        <div class="commodity-window-title">
            Commodity
        </div>
        <div v-for="commodity in commodities">
            {{ commodity.ticker }}
        </div>
    </div>
</template>

<script setup lang="ts">
import {Commodity} from "../domain";
import {onMounted, ref, Ref} from "vue";
import {CommodityGateway} from "../gateway";

const commodities: Ref<Commodity[]> = ref()

onMounted(async () => {
    const gateway = new CommodityGateway()
    commodities.value = await gateway.getMany()
})
</script>

<style scoped>
.commodity-window {
    width: 300px;
    height: 500px;
    overflow: auto;
    background: var(--ui-main-color-primary);
    color: var(--ui-main-color-white);
    padding: 6px 12px;
}
.commodity-window-title {
    font-size: 18px;
    padding: 12px 0;
}
</style>