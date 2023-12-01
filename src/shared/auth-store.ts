import {defineStore} from "pinia";
import {Id} from "../core";
import {computed, ComputedRef, Ref, ref} from "vue";

export interface User {
    id: Id,
    token: string,
    email: string,
}

export interface Account {
    id: Id,
}

export const useAuthStore = defineStore("AuthStore", () => {
    const user: Ref<User | undefined> = ref(JSON.parse(localStorage.getItem("exchange_user")))
    const getUser = computed(() => user.value)

    function saveUser(data: User) {
        console.log("saveUser", data)
        user.value = data
        localStorage.setItem("exchange_user", JSON.stringify(data))
    }

    return {
        getUser,
        saveUser,
    }
})