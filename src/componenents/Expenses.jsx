import ExpenseItem from "./ExpenseItem.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseItem data={props.items[0]} />
      <ExpenseItem data={props.items[1]} />
    </div>
  );
};

export default Expenses;