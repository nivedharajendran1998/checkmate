import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskColumn from "./components/TaskColumn";
import TaskInput from "./components/TaskInput";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleStatusChange = (index, status) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  const todoTasks = tasks.filter(
    (task) => task.status !== "todo" || task.status !== "in-progress"
  );
  const completedTasks = tasks.filter((task) => task.status === "completed");

  const progress =
    todoTasks.length > 0 ? (completedTasks.length / todoTasks.length) * 100 : 0;
  console.log("todotasks", todoTasks);
  console.log("comptasks", completedTasks);
  console.log("tasks", tasks);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <Header />
        <TaskInput setTasks={setTasks} />
        <div className="main">
          <TaskColumn
            name="TO-DO"
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
            handleStatusChange={handleStatusChange}
          />
          <TaskColumn
            name="IN-PROGRESS"
            tasks={tasks}
            status="in-progress"
            handleDelete={handleDelete}
            handleStatusChange={handleStatusChange}
          />
          <TaskColumn
            name="COMPLETED"
            tasks={tasks}
            status="completed"
            handleDelete={handleDelete}
            handleStatusChange={handleStatusChange}
            progress={progress}
          />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
