<template>
    <div class="account-page-wrapper">
        <account-window/>

    </div>

</template>

<script setup lang="ts">
import AccountWindow from "./AccountWindow.vue";
</script>

<style scoped>
.account-page-wrapper {
    padding: 12px;
    display: grid;
    grid-template-columns: 300px 800px;
    grid-gap: 24px;
}

</style>