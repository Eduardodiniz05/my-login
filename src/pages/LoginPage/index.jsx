import React from "react";
import './styles.css';
import { useState } from 'react';
import { clear } from "@testing-library/user-event/dist/clear";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        //interceptando o browser de fazer a ação padrão de atualiza pag
        e.preventDefault();
        console.log('submit', {email, password})
    };
    return (
        <div id="login">
            <h1 className="title">Login do Sistema</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
};


export default LoginPage;