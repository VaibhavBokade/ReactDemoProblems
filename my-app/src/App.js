import logo from './logo.svg';
import './App.css';
import Person from './Components/Persons/Person';
//import ExpenseItem from './Components/Expense/ExpenseItem';
//import Person from './Components/Persons/Person';
//App is component
function App() {
  return (
    <div className="App">
      <h2>Welcome to React</h2>
      
      <Person/>
      <Person/>
      <Person/>
    </div>
  );
}

export default App;
