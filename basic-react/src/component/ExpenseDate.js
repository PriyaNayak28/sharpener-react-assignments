import './ExpenseDate.css'

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
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{date}</div>
      </div>
    </>
  )
}
