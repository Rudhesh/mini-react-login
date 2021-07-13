import {useState} from "react"
import Login from "./components/Login"
import Logo from "./components/Logo"
import "./App.css";


export default function App() {
    
const [loginSuccess, setLoginSuccess] = useState(false);

function onLogin() {
    setLoginSuccess(true);
}
    return (<div className="login">
        <Logo/>
        <Login loginSuccessCallback ={onLogin} />
        {loginSuccess && <p>Login success</p>}
    </div>)
} 
