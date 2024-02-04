import { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";
import Filter from "./Filter"

export default function TransactionList({ data }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
      }

  


  return (
    <div className="transactionList">
      <ItemForm />
      <Filter
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange}
      />
      {/* <ul className="Items">
        {itemsToDisplay.map((item) => {
          <Item
            description={item.description}
            date={item.date}
            category={item.category}
            amount={item.amount}
          />;
        })}
      </ul> */}
    </div>
  );
}
