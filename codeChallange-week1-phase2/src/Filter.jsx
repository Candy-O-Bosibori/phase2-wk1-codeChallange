export default function Filter ({ search, onSearchChange, onCategoryChange }) {
    function handleSearchChange(event) {
      onSearchChange(event.target.value);
    }
    return <div className="FILter">
         <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
        <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Food">Food</option>
        <option value="Income">Income</option>
        <option value="Fashion">Fashion</option>
        <option value="Gift">Gift</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Housing">Housing</option>
      </select>
    </div>
}