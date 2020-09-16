import React from 'react';
import CustomerPurchaseRecord from './CustomerPurchaseRecord';

const CustomerPurchaseHistory = ({data}) => {
let customers = Object.keys(data);
    return (
        <table border="1" cellPadding="1%" style={{width:'100%',}}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Purchase history and Rewards</th>
                <th>Total Rewards</th>
            </tr>
            </thead>
            <tbody>
                { 
                customers.map((cust,indx) => (<CustomerPurchaseRecord data={data[cust]} />))
                }
            </tbody>
        </table>
    );
}

export default CustomerPurchaseHistory;