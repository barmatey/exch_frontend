<template>
<div class="register-page">
    <register-form/>
</div>
</template>

<script setup lang="ts">
import {RegisterForm} from "../../elements/auth";
</script>

<style scoped>
.register-page{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 48px);
    background: var(--ui-main-color-primary);
}
</style>