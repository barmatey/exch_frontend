<template>
<div class="transaction-history">

</div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {Transaction} from "./domain";

const p = defineProps<{
    transactions: Transaction[],
}>()
</script>

<style scoped>
.transaction-history{
    width: 100%;
    height: 100%;
    background: var(--ui-main-color-primary-pressed);
}
</style>