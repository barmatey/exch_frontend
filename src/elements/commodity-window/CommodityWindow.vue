<template>
    <div>
        <div>
            <div
                class="commodity-item"
                :class="{'is-selected': selectedItem.id === commodity.id}"
                v-for="commodity in commodities"
                @click="handleClickOnItem(commodity)"
            >
                {{ commodity.description.split(" ")[0] }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import {Commodity} from "./domain";
import {CommodityGateway} from "./gateway";
import {defineEmits} from "vue/dist/vue";

const commodities: Ref<Commodity[]> = ref([])
const selectedItem: Ref<Commodity | null> = ref(null)

const e = defineEmits<{
     (e: 'onSelect', item: Commodity): void
}>()


function handleClickOnItem(commodity: Commodity) {
    selectedItem.value = commodity
    e('onSelect', commodity)
}

onMounted(async () => {
    const gateway = new CommodityGateway()
    commodities.value = await gateway.getCommodities()
    selectedItem.value = commodities.value[0]
})
</script>

<style scoped>
.commodity-title {
    height: 36px;
    font-size: 18px;
}

.commodity-item {
    cursor: pointer;
    width: 120px;
    height: 30px;
    border-radius: 6px;
    padding: 6px 12px;
    display: flex;
    align-items: center;
    user-select: none;
}

.is-selected {
    background: var(--ui-main-color-blue-0);
}
</style>