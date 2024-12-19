import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();

        const users = {
            "admin@example.com": "admin",
            "minister@example.com": "minister",
            "sectormanager@example.com": "sector-manager",
            "officemanager@example.com": "office-manager",
          };
        
        const role = users[email];

        if (role && password){
            navigate(`/${role}`)
        } else {
            alert("Invalid email or password.");
        }
    }
    return(
        <div style={{textAlign: "center", marginTop: '50px'}} >
            <h1>Login</h1>
            <form action="" onSubmit={handleLogin}>
                <div>
                    <input type="email" placeholder="email..." value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                </div>
                <div>
                    <input type="password" placeholder=" enter you password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </div>
                <button type="submit">Login</button>

            </form>
        </div>
    )
}
export default LoginPage;