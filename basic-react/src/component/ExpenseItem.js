import './ExpenseItem.css'
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

export default function ExpenseItem(props) {
  let month = months[props.date.getMonth()]
  let year = props.date.getFullYear()
  let date = props.date.getDate()
  return (
    <>
      {/* <p>Food - $5</p>
      <p>Petrol - $20</p>
      <p>Movie - $10</p> */}

      <div className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{date}</div>
        </div>
        <div>
          <div className="expense-item__location">{props.location}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </div>
    </>
  )
}
