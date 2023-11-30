import {axiosWrapper} from "../shared/axios-wrapper";
import {User, UserCreate} from "./domain";

export class UserGateway {
    async register(data: UserCreate): Promise<User> {
        const url = "/auth/register"
        const result= (await axiosWrapper.post(url, data)).data
        console.log(result)
        return result
    }
}