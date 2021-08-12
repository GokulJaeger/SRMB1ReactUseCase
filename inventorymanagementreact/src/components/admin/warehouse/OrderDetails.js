import React, {useState, useEffect} from 'react'
import './OrderDetails.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function OrderDetails() {
    const history = useHistory();
    const[grocery, setgrocery]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/wgrocery").then((datas)=>{
        setgrocery(datas.data);
        }).catch((err)=>{
            console.warn(err);
        })
    }, [])
    return (
        <div>

            <div class="button-container">
                <div class="button-flipper">
                    <button class="front-button" onClick={() => {
                        history.goBack();
                    }}>BACK</button>
                    <button class="back-button"><a href="/" className="bckbtn">LOGOUT</a></button>
                </div>
            </div>
            <h2>Order Detaiils</h2>
            <div class="table-wrapper6">
                <table class="f6-table">
                    <thead>
                        <tr>
                            <th>Product Code</th>
                            <th>Product Name</th>
                            <th>Product Desc</th>
                            <th>Product Categ</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Manu Date</th>
                            <th>Exp Date</th>
                            <th>Order Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            grocery.map((x)=>{
                                return(
                                    <tr key={x.id}>
                                        <td>{x.pcode}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
