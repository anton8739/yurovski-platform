

import {AppDispatch} from "../../index";
import {AxiosResponse} from "axios";
import NewsApi from "../../../service/newsApi";
import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetAuthAction, SetTokenAction, SetUserAction} from "./types";
import {INews} from "../../../models/INews";
import AuthApi, {ErrorResponse, LoginResponse} from "../../../service/authApi";


export const AuthActionCreators = {
    login: (email:string, password:string) => async (dispatch : AppDispatch) => {
        try {
            const response: AxiosResponse<LoginResponse> = await  AuthApi.login(email,password)
            dispatch(AuthActionCreators.setToken(response.data.token));
            dispatch(AuthActionCreators.setAuth(true));
        } catch (e:any) {
            console.log(e.response.data.message)
        }

    },
    setAuth : (auth:boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setUser : (user:IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setToken : (token:string): SetTokenAction => ({type: AuthActionEnum.SET_TOKEN, payload: token}),
}