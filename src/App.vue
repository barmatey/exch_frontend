<template>
    <div>
        <AccountWindow/>
        <CommodityList/>
    </div>
</template>

<script setup lang="ts">
import {CommodityList} from "./commodity/components";
import {AccountWindow} from "./account";
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
</style>
