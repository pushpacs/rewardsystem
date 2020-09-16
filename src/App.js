import React from 'react';
import './App.css';
import CustomerPurchaseHistory from './CustomerPurchaseHistory';
import consolidatedMonthlyPurchaseOfCust from './utils';

function App() {
  return (
    <>
  <div className="App">
     Customer Rewards
    </div>
    <CustomerPurchaseHistory data={consolidatedMonthlyPurchaseOfCust} />
    </>
  );
}

export default App;
