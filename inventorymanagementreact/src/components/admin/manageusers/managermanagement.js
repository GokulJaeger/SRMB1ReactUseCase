import React from 'react'
import './ManagerManagement.css';
export default function ManagerManagement() {
    return (
        <div>
               <div class="button-container">
                <div class="button-flipper">
                    <button class="front-button">BACK</button>
                    <button class="back-button"><a href="/" className="bckbtn">LOGOUT</a></button>
                </div>
            </div>
             <h1>ManagerManagement</h1>
             <div class="table-wrapper3">
                <table class="f3-table">
                    <thead>
                        <tr>
                            <th>Header 1</th>
                            <th>Header 2</th>
                            <th>Header 3</th>
                            <th>Header 4</th>
                            <th>Header 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td>Content 1</td>
                        </tr>
                        <tr>
                            <td>Content 2</td>
                            <td>Content 2</td>
                            <td>Content 2</td>
                            <td>Content 2</td>
                            <td>Content 2</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
