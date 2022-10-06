import {Menu} from "antd";
import { LoginOutlined,SettingOutlined} from '@ant-design/icons';
const HeaderUserMenu = () => {
    return (<Menu
            items={[
                {
                    key: '1',
                    label: (
                        <div>Настройки</div>
                    ),
                    icon: <SettingOutlined />,
                },
                {
                    key: '2',
                    label: (
                        <div>Выйти</div>
                    ),
                    icon: <LoginOutlined />,
                },
            ]}
        />
    )
}
export default HeaderUserMenu;