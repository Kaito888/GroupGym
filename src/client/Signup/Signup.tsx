import { useRef } from "react";

import { login } from "../Login/Login";
import MyButton from "../components/MyButton/MyButton";

const Signup = () => {
    const username = useRef(null);
    const password = useRef(null);
    const reppassword = useRef(null);
    const name = useRef(null);
    const surname = useRef(null);

    const signup = async () => {
        let log = '';
        let pass = '';
        let rpass = '';
        let nam = '';
        let surnam = '';

        if (username.current && password.current && reppassword.current && name.current && surname.current) {
            log = (username.current as HTMLInputElement).value;
            pass = (password.current as HTMLInputElement).value;
            rpass = (reppassword.current as HTMLInputElement).value;
            nam = (name.current as HTMLInputElement).value;
            surnam = (surname.current as HTMLInputElement).value;

            if (log && pass && rpass && nam && surnam && (pass === rpass)) {
                const user = login(log, pass);

                console.log(user);
            }
        }
    }

    return (
        <div className="content-item">
            <div>
                <input
                    ref={name}
                    placeholder="name"
                />
            </div>
            <div>
                <input
                    ref={surname}
                    placeholder="surname"
                />
            </div>
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
            <div>
                <input
                    ref={reppassword}
                    placeholder="repeat password"
                />
            </div>
            <MyButton
                text="sign up"
                onClick={() => signup()}
            />
        </div>
    );
}

export default Signup;