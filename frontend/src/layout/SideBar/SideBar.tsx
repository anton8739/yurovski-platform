import {Button, Menu} from "antd";
import {Key, ReactNode, useState} from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    DesktopOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {useNavigate} from 'react-router-dom';
import {RouteNames} from "../../router";
type MenuItem = Required<MenuProps>['items'][number];


function getItem(
    label: ReactNode,
    key: Key,
    icon?: ReactNode,
    onClick?: Function,
    children?: MenuItem[],
    type?: 'group',

): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        onClick
    } as MenuItem;
}
const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const items: MenuItem[] = [
        getItem('Главная', '1', <PieChartOutlined />,    () => navigate(RouteNames.HOME)),
        getItem('Новости', '22', <PieChartOutlined />,    () => navigate(RouteNames.NEWS)),
        getItem('Пользователи', '3', <DesktopOutlined />, () => navigate(RouteNames.USERS)),
    ];
    const navigate = useNavigate();
    return (<div className="side-bar">
        <Button type="primary" onClick={toggleCollapsed} className="side-bar-btn">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
        />
    </div>)
}
export default SideBar;