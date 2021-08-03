import React from 'react';
import CheckGoods from './CheckGoods';
import './MaintenanceLogin.css';
import CheckStocks from './CheckStocks';

export default function MaintenanceLogin() {
    return (
        // <div>
        //     <div>
        //         <details>
        //             <summary></summary>
        //             <nav class="menu">
        //                 <a href="/maintenance">Home</a>
        //                 <a href="/checkgoods" >CheckGoods</a>
        //                 <a href="/checkstocks ">CheckStocks</a>
        //             </nav>
        //         </details>
        //     </div>
        //     <CheckGoods/>
        //     <div>
        //         <hr></hr>
        //     </div>
        // </div>

        <div>
            <ul>
                <li class="list-elem" id=""><a href="/maintenance">Maintenance</a></li>
                <li class="list-elem" id=""><a href="/checkgoods">Check Goods</a></li>
                <li class="list-elem" id=""><a href="/checkstocks">Check Stocks</a></li>

            </ul>

            <div id="container">
                {/* <div id="web"><MaintenanceLogin/></div> */}
                <div id="dev"><CheckGoods/></div>
                <div id="dev"><CheckStocks/></div>
                {/* <div id="trick"><h1>Check Stocks</h1></div> */}


            </div>
        </div>
    )
}
