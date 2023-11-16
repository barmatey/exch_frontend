<template>
    <div class="ui-bg-white ui-border-outline-pressed ui-border-radius-1 card-wrapper">
        <div class="c-header ui-bg-blue-1 ui-border-top-radius-1">
            <slot name="header"></slot>
        </div>
        <div class="c-body">
            <slot name="body"></slot>
        </div>
        <div class="c-footer ui-bg-blue-1 ui-border-bottom-radius-1">
            <slot name="footer"></slot>
        </div>
    </div>
</template>


<script setup lang="ts">

</script>

<style scoped>
@import "../css/blue/ui-blue-backgrounds.css";
@import "../css/blue/ui-borders.css";

.card-wrapper {
    width: 100%;
    display: grid;
    grid-template-rows: max-content 1fr;
    padding: 0;
}

.c-header {
    padding: 12px;
}

.c-body {
    padding: 12px;
}

.c-footer {
    padding: 12px;
}

</style>