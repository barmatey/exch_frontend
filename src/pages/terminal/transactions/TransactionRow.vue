<template>
<div class="transaction">
    {{transaction.date.toLocaleDateString("ru")}} {{transaction.price}} {{transaction.quantity}}
</div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {Transaction} from "../market/domain";

const p = defineProps<{
    transaction: Transaction,
}>()
</script>

<style scoped>
.transaction {
    color: white;
}
</style>