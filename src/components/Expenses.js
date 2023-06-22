import { useState } from "react";
import "./Expenses.css";
import Card from "./UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";


const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2022");
  const filterChangedHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangedHandler}
          selected={filteredYear}
        />
        {filteredExpenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
        
      </Card>
    </div>
  );
};

export default Expenses;