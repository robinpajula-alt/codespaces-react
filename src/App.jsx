import {useState} from "react";
import "./App.css";
import Expenses from "./componenents/Expenses/Expenses.jsx";
import NewExpense from "./componenents/NewExpense/NewExpense.jsx";

const DYMMY_EXPENSES = [
  {
    id: "id1",
    date: new Date(2024, 10, 12),
    title: "New book",
    price: 30.99,
  },
  {
    id: "id2",
    date: new Date(2025, 10, 12),
    title: "Big man",
    price: 55.55,
  },
  {
    id: "id3",
    date: new Date(2024, 10, 12),
    title: "New phatpants",
    price: 140.99,
  }
];
const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;