import {defineStore} from "pinia";
import {Id} from "../core";
import {computed, Ref, ref} from "vue";

export interface User{
    id: Id,
    token: string,
    email: string,
}

export const useAuthStore = defineStore("AuthStore", () => {
    const user: Ref<User | undefined> = ref(JSON.parse(localStorage.getItem("exchange_user")))
    const getUser = computed(() => user.value)

    function saveUser(data: User){
        user.value = data
        localStorage.setItem("exchange_user", JSON.stringify(user))
    }

    return {
        getUser,
        saveUser,
    }
})