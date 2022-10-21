import React, { useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {

  const [transactions, setTransaction] = useState([])
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [searchTerm, setSearchTerm] = useState("") 



  const API = `http://localhost:8001/transactions`



  function handleSubmit(e){
    e.preventDefault()
    console.log("hello")
    const newTransaction ={
      date: date,
      description: description,
      category: category,
      amount: amount
    }
    fetch(`http://localhost:8001/transactions`, {
      method:"POST",
      header:{
        "content-Type": "application/json",
      },
      body:JSON.stringify(newTransaction)
    })
    .then((r) => r.json())
    .then(setTransaction([...transactions, newTransaction]))
  }
  
  function handleAmount(event){
    setAmount(event.target.value)
  }

  function handleCategory(event){
    setCategory(event.target.value)
  }

  function handleDate(event){
    console.log(event.target.value)
    setDate(event.target.value)
  }

  function handleDescription(event){
    console.log(event.target.value)
    setDescription(event.target.value)
  }
  console.log(transactions)
  console.log(searchTerm)
  const transactionShow = transactions.filter((transact) => 
  transact.description.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
  );



  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then(setTransaction)
  },[])
  return (
    <div>
      <Search searchTerm={searchTerm}
      onChangeSearch={setSearchTerm}
      />
      <AddTransactionForm 
      handleSubmit={handleSubmit}
      handleAmount={handleAmount}
      handleCategory={handleCategory}
      handleDate={handleDate}
      handleDescription={handleDescription}
      date={date}
      category={category}
      description={description}
      amount={amount}
      />
      <TransactionsList transactions={transactionShow}/>
    </div>
  );
}

export default AccountContainer;
