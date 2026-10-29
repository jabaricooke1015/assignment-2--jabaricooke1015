import "./App.css";

import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskCounter from "./components/TaskCounter.jsx";
import { useState } from "react";

import menuIcon from "./assets/menu_icon.png";
import searchIcon from "./assets/search_icon.png";
import inboxIcon from "./assets/inbox_icon.png";
import calendarIcon from "./assets/calendar_icon.png";
import upcomingIcon from "./assets/upcoming_icon.png";


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Call Mom", completed: false },
    { id: 2, text: "Buy the new issue of Scientific American", completed: false },
    { id: 3, text: "Return the textbook to Josie", completed: true },
    { id: 4, text: "Buy the new album by Rake", completed: false },
    { id: 5, text: "Buy a gift card for Dad", completed: false },
  ]);

  const [filter, setFilter] = useState("All");
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const addTask = (text) => {
    const newTask = { id: Date.now(), text: text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <header className="site-header">
        <img src={menuIcon} alt="Menu" />

        <div className="search">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Quick find" />
        </div>

        <TaskCounter total={total} completed={completed} />
      </header>

      <div className="container">
        <nav>
          <ul>
            <li>
              <img src={inboxIcon} alt="" />
              <span>Inbox</span>
              <span className="count">5</span>
            </li>
            <li>
              <img src={calendarIcon} alt="" />
              <span>Today</span>
              <span className="count">5</span>
            </li>
            <li>
              <img src={upcomingIcon} alt="" />
              <span>Upcoming</span>
            </li>
          </ul>
        </nav>

        <main>
          <h1>Inbox</h1>
          <div className="filters">
            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <span>|</span>
            <button
              className={filter === "Active" ? "active" : ""}
              onClick={() => setFilter("Active")}
            >
              Active
            </button>
            <span>|</span>
            <button
              className={filter === "Completed" ? "active" : ""}
              onClick={() => setFilter("Completed")}
            >
              Completed
            </button>
          </div>

          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={visibleTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </div>
    </>
  );
}

export default App;