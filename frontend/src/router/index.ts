import {ComponentType, FC, ReactNode} from 'react'
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Users from "../pages/Users/Users";
import Auth from "../pages/Auth/Auth";

export interface IRoute {
    path: string;
    element: FC;
    exact?: boolean;
}

export enum RouteNames {
    USERS = '/users',
    NEWS = '/news',
    AUTH ='/auth',
    HOME = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: Home},
    {path: RouteNames.AUTH, exact: true, element: Auth},

]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: Home},
    {path: RouteNames.USERS, exact: true, element: Users},
    {path: RouteNames.NEWS, exact: true, element: News}
]