import {defineStore} from "pinia";
import {computed, Ref, ref} from "vue";
import {Alert, AlertColor} from "./types";

export const useAlertStore = defineStore("AlertStore", () => {
    const myAlert: Ref<Alert> = ref({
        show: false,
        message: "",
        color: AlertColor.NONE,
    })

    const alert = computed(() => myAlert.value)

    function clear() {
        myAlert.value = {
            show: false,
            message: "",
            color: AlertColor.NONE,
        }
    }

    function error(msg: string) {
        myAlert.value = {
            show: true,
            message: msg,
            color: AlertColor.ERROR,
        }
    }

    function success(msg: string) {
        myAlert.value = {
            show: true,
            message: msg,
            color: AlertColor.SUCCESS,
        }
    }

    return {
        alert,
        error,
        success,
        clear,
    }
})