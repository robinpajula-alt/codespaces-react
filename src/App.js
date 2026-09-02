import './App.css';
import ExpenseItem from './componenents/ExpenseItem';
const App = () => {
  const date = new Date(2024, 10, 12)
  const title = "New book"
  const price = 30.99
  return (
    <div className="App">
      <ExpenseItem
      date={date}
      title={title}
      price={price}
      />
    </div>
  ) ;
}

export default App;
