import {Avatar, Button, Dropdown} from "antd";
import {UserOutlined} from '@ant-design/icons';
import './Header.scss'
import HeaderUserMenu from "./components/HeaderUserMenu";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {RouteNames} from "../../../router";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const {isAuth} = useTypedSelector(state => state.auth)

    const openPage = (router:string) => {
        navigate(router)
    }
    return (<div className="header">
        <div className="left-section">
            <div className="logo" onClick={() => openPage(RouteNames.HOME)}>
                Yurovski development
            </div>
        </div>
        <div className="right-section">
            {isAuth ?
                <Dropdown overlay={HeaderUserMenu}>
                    <div className="header-user-menu">
                        <Avatar size={35} icon={<UserOutlined/>}/>
                        <div className="username">Anton Yurovski</div>
                    </div>
                </Dropdown>
                : <div className="header-login-panel">
                    <Button onClick={() => openPage(RouteNames.AUTH)}>
                        Войти
                    </Button>
                </div>}
        </div>
    </div>)
}
export default Header;