import { useState } from "react";
import "./Expenses.css";
import Card from "./UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpenseList";



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
        <ExpensesList />
        
        
        
      </Card>
    </div>
  );
};

export default Expenses;