
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



//rendering some key components
  return (
    <div className="App">
      <Header />
      
      
      
    </div>
  );
}

export default App;