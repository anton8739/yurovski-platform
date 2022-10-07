import {Button, Form, Input} from "antd";
import {FC} from "react";
import './LoginForm.scss'
import {useActions} from "../../../../hooks/useActions";
const LoginForm:FC = () => {
    const {login} =useActions()
    const onFinish = (values: any) => {
        console.log('Success:', values);
        login("anton@gmail.com", "123456")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (<Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="login-form"
    >
        <Form.Item
            label="Имя пользователя"
            name="username"
            rules={[{required: true, message: 'Пожалуйста введите имя пользователя'}]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label="Пароль"
            name="password"
            rules={[{required: true, message: 'Пожалуста введите пароль'}]}
        >
            <Input.Password/>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
        </Form.Item>
    </Form>)
}

export default LoginForm;