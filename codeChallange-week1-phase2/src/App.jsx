import { useState } from "react"
import "./App.css";
import DisplayItems from "./DisplayItems";
import SearchArea from "./SearchArea";

function App() {
   const [data, setData] = useState([])

//retriving data from the db
useEffect(() => {
  fetch('https://my-json-server.typicode.com/martinwakaba/flatiron/transactions')
    .then((response) => response.json())
    .then((data) => {
      setTransactions(data);
    });
}, []);


  return (
    <div>
      <h1>Bank of Flatiron</h1>

      <DisplayItems />
    </div>
  );
}

export default App;
