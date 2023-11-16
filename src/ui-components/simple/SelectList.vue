<template>
    <div>
        <select
            :id="id"
            class="form-select mt-2"
            aria-label="Default select example"
            @change="$emit('update:selectedValue', $event.target.value)"
        >
            <option
                v-for="item in selectObjects"
                :key="item[valueKey]"
                :value="item[valueKey]"
                :selected="selectedValue === item[valueKey]"
            >
                {{ item[labelKey] }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
interface P {
    id: string,
    selectObjects: object[],
    selectedValue?: string | number,
    valueKey?: string,
    labelKey?: string,
}

withDefaults(defineProps<P>(), {
    valueKey: 'pk',
    labelKey: 'name',
})


</script>

<style scoped>

</style>