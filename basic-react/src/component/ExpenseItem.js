export default function ExpenseItem() {
  let currentDate = new Date().toString()
  return (
    <>
      {/* <p>Food - $5</p>
      <p>Petrol - $20</p>
      <p>Movie - $10</p> */}
      <div>
        <div>{currentDate}</div>
        <div>Book-$10</div>
        <div>Delhi</div>
      </div>
    </>
  )
}
