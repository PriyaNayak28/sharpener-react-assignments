import './ExpenseItem.css'

export default function ExpenseItem() {
  let currentDate = new Date().toString()
  return (
    <>
      {/* <p>Food - $5</p>
      <p>Petrol - $20</p>
      <p>Movie - $10</p> */}
      <div className="expense-item">
        <div>
          <h2 className='".expense-item h2"'>{currentDate}</h2>
        </div>
        <div className=".expense-item__price">Book-$10</div>
        <div className=".expense-item__location">Delhi</div>
      </div>
    </>
  )
}
