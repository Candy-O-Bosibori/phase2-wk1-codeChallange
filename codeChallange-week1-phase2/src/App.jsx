
import './App.css';
import {useState, useEffect} from 'react';
import FormTransaction from './FormTransaction';
import Header from './Header';
import SearchBar from './SearchBar';
import TableTransaction from './TableTransaction';

//main function
function App() {

  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

//retriving data from the db
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Candy-O-Bosibori/transactions-API/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
  
//function to add a new transaction from a form input
function addTransaction(newTransaction) {
  setTransactions([...transactions, newTransaction]);
}


//rendering some key components
  return (
    <div className="App">
      <Header />
      <FormTransaction  onSubmit={addTransaction} />
      <SearchBar onSearch={setSearchTerm} />
      
      
    </div>
  );
}

export default App;