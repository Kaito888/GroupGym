import { useRef } from "react";

import MyButton from "../components/MyButton/MyButton";
import Server from "../server/Server/Server";
import { HOST } from "../config";

export const login = async (log: string, pass: string) => {
    const server = new Server(HOST);

    return await server.login(log, pass);
}

const Login = () => {
    const username = useRef(null);
    const password = useRef(null);

    const doLogin = () => {
        let log = '';
        let pass = '';

        if (username.current && password.current) {
            log = (username.current as HTMLInputElement).value;
            pass = (password.current as HTMLInputElement).value;

            if (log && pass) {
                const user = login(log, pass);

                console.log(user);
            }
        }
    }

    const signup = () => {

    }

    return (
        <div className="content-item">
            <p>
                <MyButton
                    text="sign up"
                    onClick={() => signup()}
                />
            </p>
            <div>
                <input
                    ref={username}
                    placeholder="login"
                />
            </div>
            <div>
                <input
                    ref={password}
                    placeholder="password"
                />
            </div>
            <MyButton
                text="log in"
                onClick={() => doLogin()}
            />
        </div>
    );
}

export default Login;