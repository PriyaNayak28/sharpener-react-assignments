import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'

function ExpenseItem(props) {
  let [title , setTitle] = useState(" ");
  function buttonHandler(event) {
    console.log('Button clicked');
    setTitle("new Title")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonHandler}>Change Title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem
