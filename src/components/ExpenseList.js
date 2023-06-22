import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    
    if(props.items.length === 1) {
        return <h2 className="expenses-list__fallback">Only single Expense here. Please add more..</h2>
    }

    return <ul className="expenses-list">
        {
            props.map((expense) => {
                <ExpenseItem
                 key={index}
                 title={item.title}
                 date={item.date}
                 amount={item.amount}
               />
               })
        }

    </ul>
};
  
   
      

export default ExpensesList;