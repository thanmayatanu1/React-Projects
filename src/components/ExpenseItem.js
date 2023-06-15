import './ExpenseItem.css';
function ExpenseItem()
{
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    const locationOfExpenditure = new Date(2021, 2, 28);
    const locationOfExpenditureTitle = 'Car Insurance';
    const locationOfExpenditureAmount = 294.67;
    return (
        <div className='expense-item'>
            <div>
                {expenseDate.toISOString()}
                {locationOfExpenditure.toISOString()}
            </div>
            <div className='expense-item_description'>
                <h2>{expenseTitle} {locationOfExpenditureTitle}</h2>
            </div>
            <div className='expense-item_price'>
                ${expenseAmount} ${locationOfExpenditureAmount}
            </div>
        </div>



    );
}
export default ExpenseItem;