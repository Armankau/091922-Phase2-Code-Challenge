import React from "react";
import AccountContainer from "./AccountContainer";

function Search({setSearchTerm, onChangeSearch}) {
  function handleChange(event){
    onChangeSearch(event.target.value)
  }

  return (
    <div className="ui large fluid icon input" >
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={setSearchTerm}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
