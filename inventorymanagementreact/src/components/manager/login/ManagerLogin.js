import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ManagerLoginError from './ManagerLoginError';
import axios from 'axios';
import './ManagerLogin.css';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//         .then(data => data.json())
// }

export default function ManagerLogin() {
    const initVal = {
        username: "",
        password: ""
    };

    const [loginValues, setLoginValues] = useState(initVal);
    const [loginError, setLoginError] = useState({});
    const history = useHistory();
    const [submitted, setSubmitted] = useState(false);
    const [apiValues, setApiValues] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/api/manager").then((x) => {
            console.warn("api data", x);
            setApiValues(x.data);
        });
    }, [])

    const handleSubmission = (e) => {
        e.preventDefault();
        setLoginError(validate(loginValues));
        console.log("Log Warm: ", loginError);
        console.log("===" + Object.entries(loginError).length);

        // const token = await loginUser({
        //     loginValues
        //   });
        //   setToken(token);
        // let items = {loginValues};
        // let result = fetch(" http://localhost:8000/admin",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type": "application/json",
        //         "Accept": 'application/json'
        //     },
        //     body: JSON.stringify(items)
        // });
        // result = result.json();
        // localStorage.setItem("admin-info",JSON.stringify(result))
        console.warn(submitted);
        // if (submitted) {
        //     history.push('/admindashboard');
        // }
    };


    const handleChanges = (event) => {
        const isInternalExternal = event.target.type === "checkbox";

        const { name, value } = event.target;

        // console.log(name);
        // console.log(value);
        setLoginValues((prev) => {
            return {
                ...prev,
                // [name]: value
                [name]: isInternalExternal ? event.target.checked : value,
            };
        });
    };

    useEffect(() => {
        if (submitted) {
            history.push('/managerdashboard');
        }
    }, [submitted, history])

    const validate = (values) => {
        let error = {};

        if (!values.username) {
            error.username = "Please enter the username";
        }
        if (!values.password) {
            error.password = "Please enter the password";
        }
        console.log(Object.keys(error).length);
        if (Object.keys(error).length === 0) {
            if (apiValues[0].username === loginValues.username && apiValues[0].password === loginValues.password) {
                // history.push('/admindashboard');
                setSubmitted(true);
            }
            else {
                console.warn("Invalid Credentials!..")
                history.push('/');
            }

        }

        return error;
    };

    const handleForget = () => {
        history.push('/forgotmanager');
    }
    // console.warn(loginValues.username, loginValues.password);

    return (
        <div className="areaa1">
            <div class="containerr1">
                <div class="contentt1">

                    <h2>MANAGER LOGIN</h2>
                    <h4>Enter the credentials for Dashboard</h4>
                    <form onSubmit={handleSubmission} noValidate>
                        <div>
                            <label className="lab">
                                <i className="far fa-user"></i>Username
                            </label>
                            <input
                                value={loginValues.username}
                                type="text"
                                name="username"
                                id="username"
                                onChange={handleChanges}
                            />
                            <ManagerLoginError msg={loginError.username} />
                        </div>
                        <div>
                            <label className="lab">
                                <i className="far fa-user"></i>Password
                            </label>
                            <input
                                value={loginValues.password}
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChanges}
                            />
                            <ManagerLoginError msg={loginError.password} />
                        </div>
                        <div>
                            <button type="submit">
                                Submit
                            </button>
                            <button type="submit" onClick={handleForget}>
                                Forget Password
                            </button>
                        </div>
                    </form>
                </div>
                <div class="flap1"></div>
            </div>
        </div>
    )
}
// AdminLogin.propTypes = {
//     setToken: PropTypes.func.isRequired
// }