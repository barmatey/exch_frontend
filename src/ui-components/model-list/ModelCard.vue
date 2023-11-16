<template>
    <div class="model-card model-card-lg model-card-sm">
        <simple-card>
            <template v-slot:header>
                <div class="ui-fs-3">
                    {{ model[cardNameKey] }}
                </div>
            </template>
            <template v-slot:body>
                <div
                    v-for="[key, value] in Object.entries(createCardBody(model))"
                    :key="key"
                >
                    <div class="body-grid-wrapper">
                        <div>
                            {{ key }}:
                        </div>
                        <div class="col">
                            {{ value }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="footer-flex-wrapper">
                    <button
                        class="ui-btn ui-btn-sm ui-btn-primary"
                        @click="$emit('onOpenModel')"
                    >
                        Open
                    </button>
                    <button
                        class="ui-btn ui-btn-sm ui-btn-outline-primary ui-ms-1"
                        @click="$emit('onDeleteModel')"
                    >
                        Delete
                    </button>
                </div>
            </template>
        </simple-card>
    </div>
</template>

<script setup lang="ts">
import {SimpleCard} from "../simple/"
import {convertDateToString} from "../helpers/converters"

type Model = {
    [index: string]: any
}

type Card = {
    [index: string]: any
}

const p = defineProps<{
    model: Model,
    cardNameKey: string,
    cardBodyKeys: string[],
}>()

const emit = defineEmits<{
    (e: 'onDeleteModel'): void,
    (e: 'onOpenModel'): void,
}>()

function createCardBody(model: Model): Card {
    return (Object.keys(model))
        .filter(key => p.cardBodyKeys.includes(key))
        .reduce((card: Card, k) => {
            card[k] = model[k] instanceof Date
                ? convertDateToString(model[k] as Date)
                : model[k]
            return card
        }, {})
}


</script>

<style>
@import "../css/blue/ui-fonts.css";
@import "../css/blue/ui-buttons.css";
@import "../css/blue/ui-margins.css";


@media screen and (min-width: 700px) {
    .model-card-lg {
        flex-basis: 50%;
        padding: 6px;
    }
}

@media screen and (max-width: 700px) {
    .model-card-sm {
        flex-basis: 100%;
        padding: 6px;
    }
}


.body-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.footer-flex-wrapper {
    display: flex;
}
</style>

