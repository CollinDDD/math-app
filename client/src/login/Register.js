import "./Login"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!formData.username.trim()) {
            validationErrors.username = "Username required"
        }
        if (!formData.password.trim()) {
            validationErrors.password = "Password required"
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password should be at least 6 characters"
        }
        if (formData.confirm !== formData.password) {
            validationErrors.confirm = "Passwords do not match"
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully")
            axios.post("http://localhost:5001", {
                user_name: formData.username,
                user_password: formData.password
            })
                .then(res => {
                    navigate("/");
                })
                .catch(err => console.log(err));;
        }

    }

    return(
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    id="username"
                    name="username"
                    type="text"
                    placeholder="enter username"
                    onChange={handleChange}
                />
                {errors.username && <span>{errors.username}</span>}
                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="enter password"
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
                <label htmlFor="confirm">Confirm Password:</label>
                <input 
                    id="confirm"
                    name="confirm"
                    type="password"
                    placeholder="enter password again"
                    onChange={handleChange}
                />
                {errors.confirm && <span>{errors.confirm}</span>}           
                <button type="submit">Submit</button>
            </form>
        </div>
        
    );
}

export default Register;