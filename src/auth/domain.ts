import {Id} from "../core";

export interface UserCreate{
    email: string,
    password: string,
}

export interface User {
    id: Id,
    email: string,
}

export function getBlankUser(): User {
    return {
        id: Id(null),
        email: "",
    }
}