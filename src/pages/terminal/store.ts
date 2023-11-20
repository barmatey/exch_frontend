import {defineStore} from "pinia";
import {computed, ref, Ref} from "vue";
import {Commodity} from "./commodity/domain";

export const useTerminalStore = defineStore("TerminalStore", () => {
    const commodity: Ref<Commodity> = ref(null)
    const selectedCommodity = computed(() => commodity.value)
    const setCommodity = (data: Commodity) => {
        commodity.value = data
    }
    return {
        selectedCommodity,
        setCommodity,
    }
})