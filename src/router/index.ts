import {createRouter, createWebHistory} from "vue-router"
import {terminalRoutes} from "./terminal-router";
import {accountRoutes} from "./account-router";
import {authRoutes} from "./auth-router";


export const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        terminalRoutes,
        accountRoutes,
        authRoutes,
    ]
})