import "./App.css";
import Header from "./components/Header";
import TaskColumn from "./components/TaskColumn";
import TaskInput from "./components/TaskInput";

function App() {
  return (
    <div className="container">
      <Header />
      <TaskInput />
      <div className="main">
        <TaskColumn name="TO-DO" />
        <TaskColumn name="IN-PROGRESS" />
        <TaskColumn name="COMPLETED" />
      </div>
    </div>
  );
}

export default App;
