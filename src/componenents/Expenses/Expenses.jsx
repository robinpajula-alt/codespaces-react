import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../Card.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem expenseData={props.expenses[0]} />
      <ExpenseItem expenseData={props.expenses[1]} />
    </Card>
  );
};

export default Expenses;