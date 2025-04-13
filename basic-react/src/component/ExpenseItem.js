import './ExpenseItem.css'

export default function ExpenseItem(props) {
  return (
    <>
      {/* <p>Food - $5</p>
      <p>Petrol - $20</p>
      <p>Movie - $10</p> */}
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </div>
    </>
  )
}
