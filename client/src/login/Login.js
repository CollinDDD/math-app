import { useState, useEffect } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";


function Login() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:5001/users")
          .then(res => res.json())
          .then(data => {
            setUsers([data.data]);
          })
          .catch( error => {
            console.error("Fetch error:", error);
          })
      }, [])

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
            const foundUser = users.find(user => user.user_name === values.username && user.user_password === values.password);
            if (foundUser) {
                alert('Login successful')
                .then(res => {
                    navigate("/home");
                });
            } else {
                alert('Invalid username or password');
            }
        }
    }

    return (
        <>
        
        <div className="login-container">
            <h2>Log In</h2>
            <form action="" onSubmit={handleSubmit}>
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
            </form>
        </div>
        </>
    );
}

export default Login;