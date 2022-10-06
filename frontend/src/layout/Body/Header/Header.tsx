import {Avatar, Button, Dropdown} from "antd";
import {UserOutlined} from '@ant-design/icons';
import './Header.scss'
import HeaderUserMenu from "./components/HeaderUserMenu";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Header = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (<div className="header">
        <div className="left-section">
            <div className="logo">
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
                    <Button>
                        Войти
                    </Button>
                    <Button>
                        Регистрация
                    </Button>

                </div>}
        </div>
    </div>)
}
export default Header;