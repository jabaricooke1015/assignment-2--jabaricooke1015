import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === "") return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task!"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default TaskForm;
