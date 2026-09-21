import { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import Card from "../Card.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  const filterChangeHandler = (filteredYear) => {
    console.log("Year data in Expenses.js " + filteredYear)
  };

  props.expenses.map((expense) => {
    console.log(expense)
  })

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler}/>
      {
          props.expenses.map((expense) => {
            return <ExpenseItem expenseData={expense} key={expense.id}/>
          })
      }
    </Card>
  );
};

export default Expenses;