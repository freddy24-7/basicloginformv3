import LoginForm from "./components/LoginForm";

import React, {useState} from "react";

function App() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = (details) => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Login Successful");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Login Failed");
            setError("Invalid Credentials");
            }
        }
    const Logout = () => {
        console.log("logout");
        setUser({name: "", email: ""});
    }

    //Below a ternary operator is used to check if the user is logged in or not
    return (
        <div className="App">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    );

}
export default App;
