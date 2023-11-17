<template>
    <div>
        <div class="order-book-side" style="border-right: 1px solid var(--ui-main-color-primary-hover)">
            <div class="side-title">
                {{ title }}
            </div>
            <div class="side-level" v-for="level in orderBookSide">
                <div class="price-part">
                    {{ level[0] }}
                </div>
                <div class="quantity-part">
                    {{ level[1] }}
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

.order-book-side {
    width: 300px;
    height: 100%;
    padding: 6px 12px;
}

.side-title {

}

.side-level {
    display: flex;
}

.price-part {
    width: 150px;
}

.quantity-part {
    width: 150px;
}

</style>