<template>
   <terminal-page/>

</template>

<script setup lang="ts">
import {CommodityList} from "./commodity/components";
import {AccountWindow} from "./account";
import OrderBook from "./pages/terminal/market/OrderBook.vue";
import {TerminalPage} from "./pages/terminal";
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
