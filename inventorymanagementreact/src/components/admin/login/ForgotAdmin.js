import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AdminLoginError from './AdminLoginError';

export default function ForgotAdmin() {

    const initVal = {
        phone: "",
        aadhar: ""
    };

    const [forgotValues, setForgotValues] = useState(initVal);
    const [forgotError, setForgotError] = useState({});
    const [apiValues, setApiValues] = useState({});
    const [submit, setSubmit] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8080/admin").then((x) => {
            console.warn("api data", x);
            setApiValues(x.data);
        });
    }, [])

    const handleSubmission = (e) => {
        e.preventDefault();
        setForgotError(validate(forgotValues));
        console.log("Log Warm: ", forgotError);
        console.log("===" + Object.entries(forgotError).length);
    };


    const handleChanges = (event) => {
        const isInternalExternal = event.target.type === "checkbox";

        const { name, value } = event.target;

        // console.log(name);
        // console.log(value);
        setForgotValues((prev) => {
            return {
                ...prev,
                // [name]: value
                [name]: isInternalExternal ? event.target.checked : value,
            };
        });
    };

    const validate = (values) => {
        let error = {};


        if(!values.phone){
            error.phone = "Phone cannot be blank";
        }
        if(!values.aadhar){
            error.aadhar = "Aadhar cannot be blank";
        }

        console.log(Object.keys(error).length);
        if (Object.keys(error).length === 0) {
                if (apiValues[0].phone === forgotValues.phone && apiValues[0].aadhar === forgotValues.aadhar) {
                    setSubmit(true);
                }
                else{
                    console.warn("Invalid Credentials!..")
                    history.push('/');
                }
        }

        return error;
    }


    const handleLoginPage=()=>{
        history.push('/adminlogin');
    }
    return (
        <div className="login">
            <div>
                <h2>Get your Credentials Here</h2>
                <h4>Enter the credentials...</h4>
                <form onSubmit={handleSubmission} noValidate>
                    <div>
                        <label>
                            <i className="far fa-user"></i>Phone Number
                        </label>
                        <input
                            value={forgotValues.phone}
                            type="text"
                            name="phone"
                            id="phone"
                            onChange={handleChanges}
                        />
                        <AdminLoginError msg={forgotError.phone} />
                    </div>
                    <div>
                        <label>
                            <i className="far fa-user"></i>Aadhar Number
                        </label>
                        <input
                            value={forgotValues.aadhar}
                            type="text"
                            name="aadhar"
                            id="aadhar"
                            onChange={handleChanges}
                        />
                        <AdminLoginError msg={forgotError.aadhar} />
                    </div>
                    <div>
                        <button type="submit">
                            Submit
                        </button>
                        <button type="submit" onClick={handleLoginPage}>
                            Login
                        </button>
                    </div>
                    {submit && (<p>Your credentials: Username:{apiValues[0].username} and Passowrd: {apiValues[0].password}</p>)}
                </form>
            </div>
        </div>
    )
}
