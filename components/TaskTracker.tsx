"use client";

import { useState } from "react";

export default function TaskTracker({ tasks = [], setTasks = () => {} }: any) {

  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [type, setType] = useState("Assignment");

  const addTask = () => {
    if (taskName.trim() === "" || deadline === "") return;

    const newTask = {
      name: taskName,
      deadline: deadline,
      type: type
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setDeadline("");
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
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Assignment</option>
          <option>Exam</option>
          <option>Event</option>
          <option>Goal</option>
        </select>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          onClick={addTask}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li
            key={i}
            className="border p-3 rounded flex justify-between"
          >
            <div>
              <p className="font-semibold">
                [{t.type}] {t.name}
              </p>
              <p className="text-sm text-gray-500">
                Date: {new Date(t.deadline).toLocaleDateString()}
              </p>
            </div>

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