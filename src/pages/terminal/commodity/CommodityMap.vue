<template>
    <div class="commodity">
        <div class="commodity-header">
            Commodities
        </div>
        <div class="commodity-grid">
            <div class="commodity-grid-item">Ticker</div>
            <div class="commodity-grid-item">Description</div>
            <div class="commodity-grid-item">Contracts</div>
            <div class="commodity-grid-item">Documents</div>
        </div>

        <div class="commodity-grid">
            <div v-for="x in commodities" style="display: contents;">
                <div class="commodity-grid-item"> {{ x.ticker }}</div>
                <div class="commodity-grid-item"> {{ x.description }}</div>
                <div class="commodity-grid-item"> data</div>
                <div class="commodity-grid-item"> data</div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import {CommodityGateway} from "./gateway";
import {onMounted, Ref, ref} from "vue";
import {Commodity} from "./domain";

const gateway = new CommodityGateway()
const commodities: Ref<Commodity[]> = ref([])

onMounted(async () => {
    commodities.value = await gateway.getMany()
})
</script>

<style scoped>
.commodity {
    height: 300px;
    width: 800px;
    border: 1px solid var(--ui-main-color-primary);
}

.commodity-grid {
    display: grid;
    grid-template-columns: 80px 240px 360px 120px;
}

.commodity-grid-item {
    /*border-right: 1px solid black;*/
    border-bottom: 1px solid black;
    padding: 3px 12px;
}

.commodity-header {
    padding: 6px 12px;
    font-size: 24px;
}

.commodity-line {
    display: flex;
}

.commodity-item {
    width: 120px;
    height: 36px;
}

</style>
