<template>
    <div class="main-menu">
        <div class="logo">Alliance</div>
        <div></div>
        <div class="acc-info">
            <div class="cash-info">
                <div class="text-center" style="margin-right: 12px;">Cash:</div>
                <div class="text-center">$122 500</div>
            </div>
            <div class="account text-center" @click="$router.push({name: 'AccountPage'})">Account</div>
            <div class="logout text-center">Log out</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-menu {
    width: calc(100vw - 24px);
    height: 48px;
    background: var(--ui-main-color-primary);
    color: white;
    display: grid;
    grid-template-columns: 120px 1fr 300px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
}

.logo {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}


.acc-info {
    display: flex;
    justify-content: right;
    height: 100%;
}

.cash-info {
    display: flex;
    border-right: 1px solid var(--ui-main-color-outline-pressed);
    padding: 0 12px;
    height: 100%;
}

.account {
    cursor: pointer;
    padding: 0 12px;
    height: 100%;
}

.account:hover {
    background: var(--ui-main-color-primary-hover);
}

.logout {
    padding: 0 12px;
    height: 100%;
    cursor: pointer;
}

.logout:hover {
    background: var(--ui-main-color-primary-hover);
}


.text-center {
    display: flex;
    align-items: center;
}

</style>