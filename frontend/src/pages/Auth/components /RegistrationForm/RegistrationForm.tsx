import {Button, Form, Input} from "antd";
import {FC} from "react";

const RegistrationForm:FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
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
        <Form.Item
            label="Повторите пароль"
            name="password"
            rules={[{required: true, message: 'Пожалуста введите пароль'}]}
        >
            <Input.Password/>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Регистрация
            </Button>
        </Form.Item>
    </Form>)
}
export default RegistrationForm;