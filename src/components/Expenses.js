import { useState } from "react";
import "./Expenses.css";
import Card from "./UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");
  const filterChangedHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangedHandler}
          selected={filteredYear}
        />
        
      </Card>
    </div>
  );
};

export default Expenses;