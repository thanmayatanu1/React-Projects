import './ExpenseItem.css';
function ExpenseItem(props)
{
    

    const locationOfExpenditure = new Date(2021, 2, 28);
    const locationOfExpenditureTitle = 'Car Insurance';
    const locationOfExpenditureAmount = 294.67;
    return (
        <div className='expense-item'>
            <div>
                {locationOfExpenditure.toISOString()}
            </div>
            <div className='expense-item_description'>
                <h2>{locationOfExpenditureTitle}</h2>
            </div>
            <div className='expense-item_price'>
               ${locationOfExpenditureAmount}
            </div>
        </div>



    );
}
export default ExpenseItem;