<template>
    <div>
        <div class="level-side">
            <div class="side-title">{{ title }}</div>
            <div class="row">
                <div class="col-title">Price</div>
                <div class="col-title">Quantity</div>
                <div class="col-title">Amount</div>
            </div>
            <div v-for="[price, quantity] in side.entries()" class="row">
                <div class="item">{{ price }}</div>
                <div class="item">{{ quantity }}</div>
                <div class="item">{{ price * quantity }}</div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const p = defineProps<{
    side: Map<number, number>,
    title: string,
}>()

</script>

<style scoped>
.level-side {
    width: 300px;

}

.side-title {
    font-size: 18px;
    height: 30px;
    padding: 6px 12px 0;
    font-weight: bold;

}

.row {
    display: flex;
}

.col-title {
    width: 100px;
    border-bottom: 1px solid black;
    padding: 6px 12px;

}

.item {
    width: 100px;
    padding: 0 12px;

}
</style>