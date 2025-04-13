import ExpenseItem from './component/ExpenseItem'

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem
        date={new Date(2023, 7, 15)}
        title="Insurance"
        price="50"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 3, 25)}
        title="Book"
        price="20"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 10, 11)}
        title="Pen"
        price="5"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 1, 14)}
        title="Laptop"
        price="200"
      ></ExpenseItem>
    </div>
  )
}

export default App
