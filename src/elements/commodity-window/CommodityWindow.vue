<template>
    <div>
        <div
            class="commodity-item"
            v-for="commodity in commodities"
        >
            {{ commodity.ticker }}
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import {Commodity} from "./domain";
import {CommodityGateway} from "./gateway";

const commodities: Ref<Commodity[]> = ref([])

onMounted(async () => {
    const gateway = new CommodityGateway()
    commodities.value = await gateway.getCommodities()
})
</script>

<style scoped>
.commodity-item{
    cursor: pointer;
    width: 120px;
    height: 30px;
    background: lightseagreen;
}
</style>