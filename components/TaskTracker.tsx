"use client";

import { useState } from "react";

export default function TaskTracker({ tasks = [], setTasks = () => {} }: any) {

  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="border p-4 rounded bg-white max-w-lg">

      <h2 className="text-xl font-semibold mb-3">
        Task Manager
      </h2>

      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={addTask}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t: string, i: number) => (
          <li
            key={i}
            className="border p-2 rounded flex justify-between"
          >
            {t}

            <button
              onClick={() => deleteTask(i)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}