<template>
    <div class="alliance">
        <horizontal-menu/>
        <router-view/>
    </div>
</template>

<script setup lang="ts">
import {HorizontalMenu} from "./elements/menu";
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.alliance {
    background: var(--ui-main-color-blue-0);
    height: 100vh;
    min-height: max-content;

}
</style>
