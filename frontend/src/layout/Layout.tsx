import './Layout.scss'
import SideBar from "./SideBar/SideBar";
import Body from "./Body/Body";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Layout = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (<div className="layout">
        {isAuth && <SideBar/>}
        <Body/>
    </div>)
}
export default Layout;