import React, {useState} from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
import './App.css';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
];


const App = () => {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = expense => {
  setExpenses(prevExpenses => {
    return [expense, ...prevExpenses];
  });

  };

  return (
    <div>
      <Expenses/>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default App;