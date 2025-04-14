import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'
import Card from './Card'

export default function ExpenseItem(props) {
  return (
    <>
      {/* <p>Food - $5</p>
      <p>Petrol - $20</p>
      <p>Movie - $10</p> */}

      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date}></ExpenseDate>
        <div>
          <div className="expense-item__location">{props.location}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </>
  )
}
