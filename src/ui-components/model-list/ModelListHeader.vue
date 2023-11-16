<template>
    <div class="model-list-header">
        <div>
            <div class="ui-fs-6">
                {{ titleText }}
            </div>

        </div>
        <div>
            <button
                class="ui-btn ui-btn-primary temp"
                @click="$emit('onCreateModel')"
            >
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    titleText: string,
    buttonText: string,
}>()

defineEmits<{
    (e: 'onCreateModel'): void,
}>()
</script>

<style scoped>
@import "../css/blue/ui-buttons.css";

.model-list-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 6px;
    padding-right: 6px;
}

.temp {
    margin-top: 20px;
}

</style>