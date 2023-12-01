import {createRouter, createWebHistory} from "vue-router"
import {terminalRoutes} from "./terminal-router";
import {accountRoutes} from "./account-router";
import {authRoutes} from "./auth-router";
import {useAuthStore} from "../shared/auth-store";


export const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        ...terminalRoutes,
        ...accountRoutes,
        ...authRoutes,
    ]
})


router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/sign-in", "/sign-up"]
    const authRequired = !publicPages.includes(to.path)
    const auth = useAuthStore()

    if (authRequired && !auth.getUser) {
       await  router.push({name: "LoginPage"})

    }
})