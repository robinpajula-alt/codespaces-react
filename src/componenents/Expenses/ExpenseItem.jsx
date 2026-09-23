import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card.jsx";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseData.title);
  const clickHandler = () => {
    console.log("Clicked!");
    setTitle(`Updated by click ${title}`);
    console.log(title);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenseData.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.expenseData.price}</div>
        </div>
        <button onClick={clickHandler}>Click me</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;