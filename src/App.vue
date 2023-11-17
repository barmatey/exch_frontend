<template>
    <div style="display: flex">
<!--        <div>-->
<!--            <account-window/>-->
<!--            <commodity-list/>-->
<!--        </div>-->
        <div>
            <order-book/>
        </div>
    </div>

</template>

<script setup lang="ts">
import {CommodityList} from "./commodity/components";
import {AccountWindow} from "./account";
import OrderBook from "./market/OrderBook.vue";
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
