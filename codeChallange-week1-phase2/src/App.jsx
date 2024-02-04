import { useState, useEffect } from "react"
import "./App.css";
import DisplayItems from "./DisplayItems";
import SearchArea from "./SearchArea";
import AddItem from "./AddItem";

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



  return (
    <div>
        <header className="App-header">
     <h1>Bank of Flatiron</h1>
    </header>
    <SearchArea />
   <AddItem />


      <DisplayItems data={data} />
    </div>
  );
}

export default App;
