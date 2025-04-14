import ExpenseItem from './ExpenseItem.js'
import './Expenses.css'
import Card from './Card'
function Expenses(props) {
  return (
    <>
      <Card>
        {props.expenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.price}
              location={expense.location}
            ></ExpenseItem>
          )
        })}
      </Card>
    </>
  )
}

export default Expenses
