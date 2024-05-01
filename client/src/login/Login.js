import { useState, useEffect } from "react";
import axios from "axios"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";


function Login() {
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
       username: '',
        password: '' 
    });
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const{name, value} = e.target;
        setValues({
            ...values, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values))
        if (!errors) {
            axios.post("http://localhost:5001/login", {
                username: values.username,
                password: values.password
            })
            .then(res => {
                console.log(res.data, res.data.data)
                if (res.data.data) {
                    localStorage.setItem("user", JSON.stringify(res.data.data));
                    navigate("/home");
                } else {
                    alert('Invalid username or password');
                }
            })
            .catch(err => console.log(err));
        } else {
            console.log("something's not right")
        }
    }


    return (
        <>
        
        <div className="login-container">
            
            <form action="" onSubmit={handleSubmit}>
                <h2 className="login-header">Log In</h2>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    placeholder="enter username"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    value={values.username}
                />
                {errors.username && <span>{errors.username}</span>}
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    placeholder="enter password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                />
                {errors.password && <span>{errors.password}</span>}
                <button type="submit">Log in</button>
                <Link className="create-account" to="/register">Create Account</Link>
                <Link className="dashboard" to="/dashboard">dashboard</Link>
            </form>
        </div>
        </>
    );
}

export default Login;