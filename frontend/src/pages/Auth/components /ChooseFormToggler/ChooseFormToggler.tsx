import {FC, ReactNode} from "react";
import './ChooseFormToggler.scss'
import {IAuthTabMap} from "../../Auth";

interface Props {
    activeTab: { key :string, component : ReactNode},
    setActiveTab : Function,
    authTabMap:IAuthTabMap
}
const ChooseFormToggler:FC<Props> = ({activeTab,setActiveTab,authTabMap}) => {
    return(<div className="choose-form-toggler">
        <div className={`toggler-item ${activeTab.key === authTabMap.login.key && "active"}`} onClick={() => setActiveTab(authTabMap.login)}>
            {authTabMap.login.key}
        </div>
        <div className={`toggler-item ${activeTab.key === authTabMap.registration.key && "active"}`} onClick={() => setActiveTab(authTabMap.registration)}>
            {authTabMap.registration.key}
        </div>
    </div>)
}

export default ChooseFormToggler;