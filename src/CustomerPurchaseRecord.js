import React from 'react';

const rewardPointsForAbove100 = 2;
const rewardPointsForAbove50 = 1;

const findTotalPurchaseInMonth = (purchaseRecs) => {
    return purchaseRecs.reduce((ac, rec) => ac + rec['total_amount'], 0);
 };

const findRewardsPerMonth = (totalAmt) => {
     return totalAmt > 100 
        ? 
        (totalAmt-100) * rewardPointsForAbove100 + 50 * rewardPointsForAbove50
        :
        totalAmt > 50 ? (totalAmt - 50) * rewardPointsForAbove50 
        : 0
 }

const CustomerPurchaseRecord = ({data}) => {
    const {name, address, purchase_history} = data;
                    const months = Object.keys(purchase_history);
                    let totalRewardsSoFar = 0;
                   return (<tr key={name}>
                       <td style={{width:'20%', textAlign: 'center'}}>{name}<br/>{address}</td>
                       <td style={{width:'70%'}}>
                           {months.map((month,indx) => {
                               const totalMonthlyPurchase = findTotalPurchaseInMonth(purchase_history[month]);
                               const totalRewardsPerMonth = findRewardsPerMonth(totalMonthlyPurchase);
                               totalRewardsSoFar = totalRewardsSoFar + totalRewardsPerMonth;
                               return(<table border="0" style={{width:'100%', 'textAlign':'center'}}>
                                   <thead>
                                    <tr key='hdrRow2' style={{'backgroundColor':'#dfedfc'}}>
                                   <th>Month</th>
                                    <th>Purchase history</th>
                                    <th>total Amount</th>
                                    <th>Rewards</th>
                                    </tr>
                                   </thead>
                                   <tbody>
                                   <tr key={name + 'dummyRow1'}><td colSpan="5" style={{height:'20px'}}></td></tr>
                                    <tr key={indx}>
                                        <td style={{width:'15%'}}>{month}</td>
                                        <td style={{width:'30%'}}>{
                                            purchase_history[month].map(histItem => 
                                            {return(
                                                <>
                                                <span key={month}>{Object.values(histItem).join("- $")}</span>
                                                <br/>
                                                </>);
                                            })
                                        }
                                        </td>
                                    <td>
                                        ${
                                            totalMonthlyPurchase
                                        }
                                    </td>
                                    <td>
                                        {
                                            totalRewardsPerMonth
                                        }
                                    </td>
                                    </tr>
                                    <tr key={name + 'dummyRow2'}><td colSpan="5" style={{height:'20px'}}></td></tr>
                                    </tbody>
                                </table>);
                           })}
                       </td>
                       <td style={{width:'10%',textAlign: 'center'}}>{totalRewardsSoFar}</td>
                    </tr>
                    );
};

export default CustomerPurchaseRecord;