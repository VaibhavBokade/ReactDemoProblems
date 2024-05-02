import './ExpenseItem.css'
const ExpenseItem = () => {
    const expDate = new Date()
    const expTitle ="New MousePad"
    const expAmount =200
    return (
        <div className="expense-item">
           <div>{expDate.toISOString()}</div>
           <div className="expense-item__description">
            <h2 >{expTitle}</h2>
            <p className="expense-item"__price>{expAmount}</p>
            </div> 
        </div>
    )
}
export default ExpenseItem;