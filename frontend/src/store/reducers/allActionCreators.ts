import {AuthActionCreators} from "./auth/action-creator";
import {NewsActionCreators} from "./news/action-creator";


export const allActionCreators = {
    ...NewsActionCreators,
    ...AuthActionCreators
}