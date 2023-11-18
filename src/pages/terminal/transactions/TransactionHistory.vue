<template>
    <div class="transaction-history">
        <div class="trs-history-title">Last trades</div>
        <div class="trs-grid-wrapper">
            <div class="trs-item">Date</div>
            <div class="trs-item">Price</div>
            <div class="trs-item">Quantity</div>
            <div
                v-for="trs in transactions"
                class="trs-item"
                style="display: contents"
            >
                <div> {{ trs.date.toLocaleDateString("ru") }}</div>
                <div>{{ trs.price }}</div>
                <div>{{ trs.quantity }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {Transaction} from "../market/domain";

const p = defineProps<{
    transactions: Transaction[],
}>()
</script>

<style scoped>
@import "./trs-styles.css";


</style>