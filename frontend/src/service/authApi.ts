import axios, {AxiosResponse} from "axios";
import {apiAxios} from "./axiosConfig";


export interface LoginResponse {
    token : string
}

export interface ErrorResponse {
    message : string
}

export default class AuthApi {
    static async login(email:string, password:string): Promise<AxiosResponse<LoginResponse>> {
        return   new Promise(function(resolve) {
            resolve(apiAxios.post<LoginResponse>('/api/user/login', {email,password}))
        });
    }
}


