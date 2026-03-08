"use client";

import { useState } from "react";

export default function StudyTracker() {

  const [hours, setHours] = useState("");
  const [log, setLog] = useState<number[]>([]);

  const addHours = () => {
    if (hours === "") return;

    setLog([...log, Number(hours)]);
    setHours("");
  };

  const total = log.reduce((sum, h) => sum + h, 0);

  return (
    <div className="border p-4 rounded bg-white max-w-lg">

      <h2 className="text-xl font-semibold mb-3">
        Study Tracker
      </h2>

      <div className="flex gap-2 mb-3">
        <input
          type="number"
          placeholder="Hours studied"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={addHours}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <p>
        Total Study Hours: <b>{total}</b>
      </p>

    </div>
  );
}