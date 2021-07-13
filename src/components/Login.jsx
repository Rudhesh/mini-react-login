import {useState} from "react"
import './Login.css'






function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


function doLogin(e) {
    e.preventDefault();
    if(email !== "rudhesh@gmail.com") {
        alert("invalid")
        return;
    }
    props.loginSuccessCallback(email);
}
    return ( <form className="loginform" onSubmit={doLogin}>
           <input type ="text"
           placeholder="E-mail"
           value={email}
           onChange={(e)=> setEmail(e.target.value)}/>
          
           <input type ="password"
           placeholder="password"
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
           />
           <button disabled={password.length === 0} type="submit">Login</button>
       </form>
    )
}

export default Login