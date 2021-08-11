import React,{useState} from 'react'
import './Request.css';
import ReqOrdErrorMessage from './ReqOrdErrorMessage';
import { useHistory } from "react-router-dom";

export default function Request() {
    const history = useHistory();
    const initialValues = {
        ordercode: "",
        pcode: "",
        pcatg:"",
        pname: "",
        pqty: "",
        pprice: "",
        reqdate: "",
        vendorid: "",
        vendorname: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
   
    //onformsubmit
    const handleDoSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));

        console.log("==>" + Object.entries(formErrors).length);

        setSubmitted(true);
    };
    //onchangeevent
    const handleOnChange = (event) => {
        const isInternalExternal = event.target.type === "checkbox";

        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setFormValues((prev) => {
            return {
                ...prev,
                [name]: isInternalExternal ? event.target.checked : value,
            };
        });
    };

    const validate = (values) => {
        let errors = {};
        console.log(values);
        const character = /^[a-zA-Z]+$/;
        if (!values.ordercode) {
            errors.ordercode = "*Required";
        }
        if (!values.pcode) {
            errors.pcode = "*Required";
        }
        if (!values.pcatg) {
            errors.pcatg = "*Required";
        } else if (!character.test(values.pcatg)) {
            errors.pcatg = "*Only alphabets are Permitted";
        }
       
        if (!values.pname) {
            errors.pname = "*Required";
        } else if (!character.test(values.pname)) {
            errors.pname = "*Only alphabets are Permitted";
        }

        if (!values.pqty) {
            errors.pqty = "*Required";
        }
        if (!values.pprice) {
            errors.pprice = "*Required";
        }
        if (!values.reqdate) {
            errors.reqdate = "*Required";
        }
        if (!values.vendorid) {
            errors.vendorid = "*Required";
        }
        if (!values.vendorname) {
            errors.vendorname = "*Required";
        }
        return errors;
    };
    return (
        <div>
            <div class="button-container">
                <div class="button-flipper">
                    <button class="front-button">BACK</button>
                    <button class="back-button" onClick={() => {
                history.goBack();
              }}><a href="/" className="bckbtn">LOGOUT</a></button>
                </div>
            </div>
            <div className="reqarea">
                <div class="reqwrapper">
                    <div class="reqcontainer">
                        <form onSubmit={handleDoSubmit} noValidate>
                            <h1>
                                <i class="fas fa-shipping-fast"></i>
                                REQUEST DETAILS
                            </h1>
                            <div class="name">
                                <div>
                                    <label for="f-name" >Order Code</label>
                                    <input type="text" name="ordercode" value={formValues.ordercode}
                                        onChange={handleOnChange} />
                                    <ReqOrdErrorMessage message={formErrors.ordercode} />
                                </div>
                                <div>
                                    <label for="l-name">Product Code</label>
                                    <input type="text" name="pcode" value={formValues.pcode}
                                        onChange={handleOnChange} />
                                    <ReqOrdErrorMessage message={formErrors.pcode} />
                                </div>
                            </div>
                            <div class="street">
                                <label for="name">Product Category</label>
                                <input type="text" name="pcatg" value={formValues.pcatg}
                                    onChange={handleOnChange} />
                                <ReqOrdErrorMessage message={formErrors.pcatg} />
                            </div>
                            <div class="address-info">
                                <div>
                                    <label for="city">Product Name</label>
                                    <input type="text" name="pname" value={formValues.pname}
                                        onChange={handleOnChange} />
                                    <ReqOrdErrorMessage message={formErrors.pname} />
                                </div>
                                <div>
                                    <label for="state">Product Quantity</label>
                                    <input type="text" name="pqty" value={formValues.pqty}
                                        onChange={handleOnChange} />
                                    <ReqOrdErrorMessage message={formErrors.pqty} />
                                </div>
                                <div>
                                    <label for="zip">Product Price</label>
                                    <input type="text" name="pprice" value={formValues.pprice}
                                        onChange={handleOnChange} />
                                    <ReqOrdErrorMessage message={formErrors.pprice} />
                                </div>
                            </div>

                            <div class="cc-num">
                                <label for="card-num">Request Date</label>
                                <input type="text" name="reqdate" value={formValues.reqdate}
                                    onChange={handleOnChange} />
                                <ReqOrdErrorMessage message={formErrors.reqdate} />
                            </div>
                            <div class="cc-info">
                                <div>
                                    <label for="card-num">Vendor Id</label>
                                    <input type="text" name="vendorid" value={formValues.vendorid}
                                        onChange={handleOnChange} />
                                    <ReqOrdErrorMessage message={formErrors.vendorid} />
                                </div>
                                <div>
                                    <label for="card-num">Vendor Name</label>
                                    <input type="text" name="vendorname" value={formValues.vendorname}
                                        onChange={handleOnChange} />
                                    <ReqOrdErrorMessage message={formErrors.vendorname} />
                                </div>
                            </div>
                            <div class="btns">
                                <button>SUBMIT</button>
                                {/* <button class="grow_skew_backward">BACK </button> */}
                            </div>
                        </form>
                    </div>

                </div>
                <div class="button">
                </div>
            </div>
        </div>
    )
}
