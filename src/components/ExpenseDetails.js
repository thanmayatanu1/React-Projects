import './ExpenseDetails.css';
const ExpenseDetails = (props) => {
    return (
      <div className='expense-details'>
        <div className='expense-title'>{props.title}</div>
        <div className='expense-amount'>{props.amount}</div>
      </div>
    );
  };
  
  export default ExpenseDetails;