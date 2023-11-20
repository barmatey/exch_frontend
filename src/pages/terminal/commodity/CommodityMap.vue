<template>
    <div class="commodity">
        <div class="commodity-header">
            Commodities
        </div>
        <div class="commodity-item" v-for="x in commodities"> {{ x.description }}</div>
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
    height: 100%;
    background: var(--ui-main-color-primary-2);
}

.commodity-header {
    padding: 12px 12px;
    font-size: 24px;
    font-weight: bold;
    background: inherit;
    color: white;
}

.commodity-item {
    background: inherit;
    color: white;
    height: 36px;
    padding: 6px 12px;
    display: flex;
    align-items: center;
}

.commodity-item:hover {
    background: var(--ui-main-color-primary-hover);
    cursor: pointer;
}


</style>
