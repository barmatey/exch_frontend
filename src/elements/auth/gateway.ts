import {axiosWrapper} from "../../shared/axios-wrapper";
import {User, UserCreate} from "./domain";
import {Id} from "../../core";

interface TokenSchema {
    access_token: string,
    token_type: string,
}

interface UserSchema {
    id: string,
    email: string,
    is_active: boolean,
    is_superuser: boolean,
    is_verified: boolean,
}

function userDeserializer(data: UserSchema, token: string): User {
    return {
        email: data.email,
        id: Id(data.id),
        token,
    }
}


export class UserGateway {
    async register(data: UserCreate): Promise<User> {
        const url = "/auth/register"
        return (await axiosWrapper.post(url, data)).data
    }

    async login(data: UserCreate): Promise<User> {
        // Get token
        let url = "/auth/jwt/login"
        const headers = {
            'Accept': 'application/json, text/plain, */*',
        }
        const credentials = new FormData()
        credentials.append("username", data.email)
        credentials.append("password", data.password)
        const token: TokenSchema = (await axiosWrapper.post(url, credentials, {headers})).data

        //Get user
        headers["Authorization"] = `Bearer ${token.access_token}`
        url = "/users/me"
        const userSchema: UserSchema = (await axiosWrapper.get(url, {}, headers)).data
        return userDeserializer(userSchema, token.access_token)
    }
}