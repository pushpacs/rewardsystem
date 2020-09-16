import data from './data.json';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let groupDataByCustName = function(data){
  return data.reduce(function(acc,obj){      
    const {name, address, date_of_purchase, total_amount} = obj;
    const month = monthNames[new Date(date_of_purchase).getMonth()];
    let purchaseHistory = [];
    if(!acc[name])
    {
        acc[name] = {name, address};
        let monthHistory = {};
        monthHistory[month] = [{'date':date_of_purchase,'total_amount': total_amount}];
        purchaseHistory.push(monthHistory);
        acc[name]['purchase_history'] = monthHistory;
    } else 
    {
        if(!acc[name]['purchase_history'][month])
        {
            acc[name]['purchase_history'][month] = [{
                date_of_purchase,
                total_amount
            }];
        }else{
            acc[name]['purchase_history'][month].push({date_of_purchase, total_amount});
        }
     }
    return acc;
 },{});
}

let consolidatedMonthlyPurchaseOfCust = groupDataByCustName(data);


export default consolidatedMonthlyPurchaseOfCust;