import './ExpenseDate.css'
import Card from './Card'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function ExpenseDate(props) {
  let month = months[props.date.getMonth()]
  let year = props.date.getFullYear()
  let date = props.date.getDate()
  return (
    <>
      <Card className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{date}</div>
      </Card>
    </>
  )
}
