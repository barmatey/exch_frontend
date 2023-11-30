import {RegisterPage, LoginPage} from "../pages/register";

export const authRoutes = [
    {
        path: '/sign-up',
        component: RegisterPage,
        name: 'RegisterPage',
    },
    {
        path: '/sign-in',
        component: LoginPage,
        name: 'LoginPage',
    },
]


