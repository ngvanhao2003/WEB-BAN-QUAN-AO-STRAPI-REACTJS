import React, { useContext, useState } from "react";
import apiUser from "../../../api/apiUser";
import UserContext from "../../context/userContext";
import "./login.css";
import { useNavigate } from "react-router-dom";

function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            identifier: email,
            password: password
        };
        try {
            const response = await apiUser.loginUser(data);
            console.log(response);

            var user = response.data.user;
            setUser(user);
            navigate("/");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input
                        className="form-control"
                        placeholder="Nhập email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3 mt-3">
                    <label className="form-label">Mật khẩu:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        </div>
    );
}

export default LoginUser;
