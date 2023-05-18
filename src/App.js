import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  //When you have completed a task click on it then it will be completed.
  return (
    <div className="App">
      <TodoWrapper  />
    </div>
  );
}

export default App;
