import React from "react";
import AccountContainer from "./AccountContainer";

function Search({searchTerm, onChangeSearch}) {
  function handleChange(event){
    onChangeSearch(event.target.value)
  }

  return (
    <div className="ui large fluid icon input" >
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
