<template>
    <icon-base>
        <path :fill="color"
              d="M120 816v-60h240v60H120Zm0-210v-60h480v60H120Zm0-210v-60h720v60H120Z"
        />
    </icon-base>
</template>

<script setup lang="ts">
import {IconBase} from "../base";

defineProps<{
    color: string
}>()
</script>

<style scoped>
</style>