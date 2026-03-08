"use client";
import { useEffect, useState } from "react";
export default function Dashboard({
  totalTasks,
  studyHours,
  healthScore,
  urgentTasks,
  healthFeedback,
}: any) {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);
  useEffect(() => {
    const storedScore = localStorage.getItem("healthScore");
    const storedFeedback = localStorage.getItem("healthFeedback");

    if (storedScore) setScore(Number(storedScore));
    if (storedFeedback) setFeedback(JSON.parse(storedFeedback));
  }, []);
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Life.OS.3 Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="border p-4 rounded bg-white">
          <p className="text-gray-500 text-sm">Total Tasks</p>
          <p className="text-2xl font-bold">{totalTasks}</p>
        </div>

        <div className="border p-4 rounded bg-white">
          <p className="text-gray-500 text-sm">Study Hours</p>
          <p className="text-2xl font-bold">{studyHours}</p>
        </div>

        <div className="border p-4 rounded bg-white">
          <p className="text-gray-500 text-sm">Health Score</p>
          <p className="text-2xl font-bold">{score}</p>
        </div>

        <div className="border p-4 rounded bg-white">
          <p className="text-gray-500 text-sm">Urgent Deadlines</p>
          <p className="text-2xl font-bold text-red-500">{urgentTasks}</p>
        </div>

      </div>

    </div>
  );
}