import { useState } from "react";
function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick(e) {
    if (enteredTask.trim() === "") {
        return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
    e.preventDefault();
  }
  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
