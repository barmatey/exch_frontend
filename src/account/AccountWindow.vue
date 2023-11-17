<template>
    <div class="account-window">
        <div class="account-title">
            Account
        </div>
        <div class="account-info">
            <div class="account-info-left"> Cash:</div>
            <div class="account-info-right"> {{ Number(account.cash).toLocaleString("ru") }}</div>
        </div>
        <div class="account-info">
            <div class="account-info-left"> Buy orders:</div>
            <div class="account-info-right"> {{ Number(account.buyOrdersAmount).toLocaleString("ru") }}</div>
        </div>
        <div class="account-info">
            <div class="account-info-left"> Sell orders:</div>
            <div class="account-info-right"> {{ Number(account.sellOrdersAmount).toLocaleString("ru") }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import {Account, getBlankAccount} from "./domain";
import {AccountGateway} from "./gateway";
import {TEMP_ACC_ID} from "../core";

const account: Ref<Account> = ref(getBlankAccount())

onMounted(async () => {
    const gateway = new AccountGateway()
    account.value = await gateway.getAccountById(TEMP_ACC_ID)
})
</script>

<style scoped>
.account-window {
    background: var(--ui-main-color-primary);
    width: 300px;
    padding: 6px 12px;
    color: var(--ui-main-color-white);
}

.account-title {
    font-size: 18px;
    padding: 12px 0;
}

.account-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3px;
}

.account-info-left {
    width: 120px;
}

.account-info-right {
    width: 100px;
}
</style>