import React from "react";

function AddTransactionForm({handleSubmit, date, category, amount, description, handleAmount, handleCategory, handleDate, handleDescription}) {
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} onChange={handleDate}/>
          <input type="text" name="description" placeholder="Description" value={description} onChange={handleDescription}/>
          <input type="text" name="category" placeholder="Category" value={category} onChange={handleCategory}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={handleAmount}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
