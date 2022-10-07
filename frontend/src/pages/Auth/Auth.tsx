import './Auth.scss'
import {useState} from "react";
import ChooseFormToggler from "./components /ChooseFormToggler/ChooseFormToggler";
import LoginForm from "./components /LoginForm/LoginForm";
import RegistrationForm from "./components /RegistrationForm/RegistrationForm";

export type IAuthTabMap = typeof authTabMap

const authTabMap = {
    login : { key : 'Войти', component : <LoginForm/>},
    registration : { key : 'Регистрация', component : <RegistrationForm/>}
}

const Auth = () => {

    const [activeTab, setActiveTab] = useState(authTabMap.login)
    return(<div className="auth-page">
        <div className="auth-form-container">
            <div className="auth-form-container-header">
                {activeTab.key}
            </div>
            <div className="auth-form-container-content">
                {activeTab.component}
            </div>
            <div className="auth-form-container-footer">
                <ChooseFormToggler activeTab={activeTab} setActiveTab={setActiveTab} authTabMap={authTabMap}/>
            </div>
        </div>
    </div>)
}
export default Auth;