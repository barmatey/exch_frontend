<template>
    <div class="main-menu">
        <div class="logo">Alliance</div>
        <div></div>
        <div class="acc-info">
            <div style="margin-right: 24px;">Cash: </div>
            <div>$122 500</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-menu {
    width: calc(100vw - 24px);
    height: 48px;
    /*background: white;*/
    background: var(--ui-main-color-primary);
    color: white;
    display: grid;
    grid-template-columns: 120px 1fr 300px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
}

.logo{
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.app-navigation {
    display: flex;
}

.acc-info{
    display: flex;
}

</style>