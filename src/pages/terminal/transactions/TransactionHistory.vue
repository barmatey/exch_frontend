<template>
<div class="transaction-history">
    <div v-for="trs in transactions">
        <transaction-row :transaction="trs"/>
    </div>
</div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {Transaction} from "../market/domain";
import TransactionRow from "./TransactionRow.vue";

const p = defineProps<{
    transactions: Transaction[],
}>()
</script>

<style scoped>
.transaction-history{
    background: var(--ui-main-color-primary-pressed);
}
</style>