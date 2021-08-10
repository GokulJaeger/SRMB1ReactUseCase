import React from 'react'
import './Request.css';
export default function Request() {
    return (
        <div>
            <div className="reqarea">
                <div class="reqwrapper">
                    <div class="reqcontainer">
                        <form action="">
                            <h1>
                                <i class="fas fa-shipping-fast"></i>
                                REQUEST DETAILS
                            </h1>
                            <div class="name">
                                <div>
                                    <label for="f-name">Order Code</label>
                                    <input type="text" name="ordercode" />
                                </div>
                                <div>
                                    <label for="l-name">Product Code</label>
                                    <input type="text" name="pcode" />
                                </div>
                            </div>
                            <div class="street">
                                <label for="name">Product Category</label>
                                <input type="text" name="pcatg" />
                            </div>
                            <div class="address-info">
                                <div>
                                    <label for="city">Product Name</label>
                                    <input type="text" name="pname" />
                                </div>
                                <div>
                                    <label for="state">Product Quantity</label>
                                    <input type="text" name="pqty" />
                                </div>
                                <div>
                                    <label for="zip">Product Price</label>
                                    <input type="text" name="pprice" />
                                </div>
                            </div>

                            <div class="cc-num">
                                <label for="card-num">Request Date</label>
                                <input type="text" name="reqdate" />
                            </div>
                            <div class="cc-info">
                                <div>
                                    <label for="card-num">Vendor Id</label>
                                    <input type="text" name="vendorid" />
                                </div>
                                <div>
                                    <label for="card-num">Vendor Name</label>
                                    <input type="text" name="vendorname" />
                                </div>
                            </div>
                            <div class="btns">
                                <button>SUBMIT</button>
                                <button class="grow_skew_backward">BACK </button>
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
