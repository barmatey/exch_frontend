import {defineStore} from "pinia";
import {computed, ref, Ref} from "vue";
import {Commodity, createCommodity} from "./commodity/domain";

export const useTerminalStore = defineStore("TerminalStore", () => {
    const commodity: Ref<Commodity> = ref(createCommodity())
    const selectedCommodity = computed(() => commodity.value)

    function setCommodity(data: Commodity) {
        commodity.value = data
    }

    return {
        selectedCommodity,
        setCommodity,
    }
})