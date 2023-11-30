<template>
<div class="login-page">
    <login-form/>
</div>
</template>

<script setup lang="ts">
import {LoginForm} from "../../auth/";
</script>

<style scoped>
.login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 48px);
    background: var(--ui-main-color-primary);
}
</style>