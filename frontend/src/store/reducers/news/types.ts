
export enum NewsActionEnum {
    SET_NEWS = "SET_NEWS",
}

export interface NewsState {
    news: INews[];
}
export interface SetNewsAction {
    type: NewsActionEnum.SET_NEWS;
    payload : INews[]
}
export type NewsAction =
    SetNewsAction

export interface INews {
    title : string,
    content:string
}