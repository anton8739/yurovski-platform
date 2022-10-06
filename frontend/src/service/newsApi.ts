import axios, {AxiosResponse} from "axios";
import {INews} from "../store/reducers/news/types";
import {apiAxios} from "./axiosConfig";

export default class NewsApi {
    static async getNews(): Promise<AxiosResponse<INews[]>> {
        return   new Promise(function(resolve) {

                resolve(apiAxios.get<INews[]>('/api/news/all'))

        });
    }
    static async createNews(params:INews): Promise<AxiosResponse<INews[]>> {
        return   new Promise(function(resolve) {

            resolve(apiAxios.post<INews[]>('/api/news/create', params))

        });
    }
    static async deleteNews(id:number): Promise<AxiosResponse<INews[]>> {
        return   new Promise(function(resolve) {

            resolve(apiAxios.delete<INews[]>(`/api/news/delete/${id}`))

        });
    }
    static async updateNews(params:INews,id:number): Promise<AxiosResponse<INews[]>> {
        return   new Promise(function(resolve) {

            resolve(apiAxios.put<INews[]>(`/api/news/update/${id}`,params))

        });
    }
}


