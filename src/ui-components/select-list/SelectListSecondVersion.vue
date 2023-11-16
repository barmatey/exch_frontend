<template>
    <div
        v-if="isShow"
        :style="dropdownWrapperStyle"
        style="user-select: none"
        v-click-away="handleClickAway"
    >
        <div
            v-for="item in items"
            :key="item.id"
            :style="dropdownItemStyle"
            class="item"
            @mousedown="handleSelectItem(item)"
        >
            {{ item.value }}
        </div>
    </div>

</template>

<script setup lang="ts">
import {TypedValue} from "../../shared/typed-value";

interface Props {
    isShow?: boolean,
    items: TypedValue[],
    dropdownWrapperStyle?: object,
    dropdownItemStyle?: object,
    hoverBackground?: string,
}

const p = withDefaults(defineProps<Props>(), {
    dropdownWrapperStyle: () => ({}),
    dropdownItemStyle: () => ({}),
    hoverBackground: "",
})

const emit = defineEmits<{
    (e: 'onSelect', item: TypedValue): void,
    (e: 'onClickAway'): void,
}>()

const handleClickAway = () => {
    emit("onClickAway")
}


const handleSelectItem = (item: TypedValue) => {
    emit("onSelect", item)
}
</script>

<style scoped>
.item {

}

.item:hover {
    background: v-bind(hoverBackground);
}
</style>