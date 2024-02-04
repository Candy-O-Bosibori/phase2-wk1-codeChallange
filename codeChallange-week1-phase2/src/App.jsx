import { useState, useEffect } from "react"
import "./App.css";
import TransactionList from "./TransactionList";


function App() {
   const [data, setData] = useState([])

// fetch data
useEffect(() => {
  fetch('https://my-json-server.typicode.com/Candy-O-Bosibori/transactions-API/db')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
}, []);

// Add a transaction
function handleItemFormSubmit(newData){
  const newTransaction = [...data, newData]
  setData(newTransaction)
}

  return (
    <div>
        <header className="App-header">
     <h1>Bank of Flatiron</h1>
    </header>
    

      <TransactionList data={data}  onItemFormSubmit={handleItemFormSubmit}  />
    </div>
  );
}

export default App;
