import {axiosWrapper} from "../../shared/axios-wrapper";
import {Token, User, UserCreate} from "./domain";

interface TokenSchema {
    access_token: string,
    token_type: string,
}

function tokenDeserializer(data: TokenSchema): Token{
    return {accessToken: data.access_token}
}

export class UserGateway {
    async register(data: UserCreate): Promise<User> {
        const url = "/auth/register"
        return (await axiosWrapper.post(url, data)).data
    }

    async login(data: UserCreate): Promise<Token> {
        const url = "/auth/jwt/login"
        const headers = {
            'Accept': 'application/json, text/plain, */*',
        }
        const credentials = new FormData()
        credentials.append("username", data.email)
        credentials.append("password", data.password)

        const result: TokenSchema = (await axiosWrapper.post(url, credentials, {headers})).data
        return tokenDeserializer(result)
    }
}