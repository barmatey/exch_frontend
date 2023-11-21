<template>
    <div>
        <horizontal-menu/>
        <terminal-page/>
    </div>
</template>

<script setup lang="ts">
import {HorizontalMenu} from "./pages/menu";
import {TerminalPage} from "./pages/terminal";
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
