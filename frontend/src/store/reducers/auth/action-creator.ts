import {AppDispatch} from "../../index";
import {AxiosResponse} from "axios";
import {INews, NewsActionEnum, SetNewsAction} from "../news/types";
import NewsApi from "../../../service/newsApi";

export const NewsActionCreators = {
    getNews : () => async (dispatch : AppDispatch) => {
        const response: AxiosResponse<INews[]> = await NewsApi.getNews()
        console.log(response.data)
        const news:INews[] | undefined = response.data
        if(news) {
            dispatch(NewsActionCreators.setNews(news));
        }

    },
    createNews : (params:INews) => async (dispatch : AppDispatch) => {
        const response: AxiosResponse<INews[]> = await NewsApi.createNews(params)
        console.log(response.data)
    },
    deleteNews : (id:number) => async (dispatch : AppDispatch) => {
        const response: AxiosResponse<INews[]> = await NewsApi.deleteNews(id)
        console.log(response.data)

    },
    updateNews : (params:INews, id:number) => async (dispatch : AppDispatch) => {
        const response: AxiosResponse<INews[]> = await NewsApi.updateNews(params, id)
        console.log(response.data)
    },
    setNews : (news: INews[]): SetNewsAction => ({type: NewsActionEnum.SET_NEWS, payload: news}),
}