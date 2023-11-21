import {createRouter, createWebHistory} from "vue-router"
import {terminalRoutes} from "./terminal-router";


export const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        terminalRoutes,
    ]
})