import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  
  const clickHandler = () => {
    setTitle("Updated!!!");
   
    console.log(title);
  }

  const AddExpense = () => {
    setAmount("100$");
   
    console.log(amount);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick = {clickHandler}>Delete Expense</button>
      <button onClick = {AddExpense}>Add Expense Expense</button>
    </Card>
  );
};

export default ExpenseItem;