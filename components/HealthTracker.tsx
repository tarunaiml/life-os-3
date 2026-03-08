"use client";

import { useState } from "react";

export default function HealthTracker({
  healthScore,
  setHealthScore,
  healthFeedback,
  setHealthFeedback,
}: any) {
  const [gymLevel, setGymLevel] = useState(0);
  const [sleep, setSleep] = useState("");
  const [steps, setSteps] = useState("");
  const [protein, setProtein] = useState("");
  const [heartRate, setHeartRate] = useState("");

  const calculateHealth = () => {
    let score = 0;
    const feedback: string[] = [];
    localStorage.setItem("healthScore", score.toString());
    localStorage.setItem("healthFeedback", JSON.stringify(feedback));
    const s = Number(sleep);
    const st = Number(steps);
    const p = Number(protein);
    const hr = Number(heartRate);
    // Gym contribution
    if (gymLevel === 1) score += 10;
    if (gymLevel === 2) score += 20;

    if (gymLevel === 0) {
        feedback.push("🏋️ A light workout could improve your health today.");
    }
    if (s >= 7) score += 25;
    else feedback.push("😴 Try sleeping at least 7 hours");

    if (st >= 8000) score += 20;
    else feedback.push("🚶 Try walking more today");

    if (p >= 60) score += 20;
    else feedback.push("🍗 Increase protein intake");

    if (hr >= 60 && hr <= 90) score += 20;
    else feedback.push("❤️ Check your heart rate");

    setHealthScore(score);
    setHealthFeedback(feedback);
  };

  return (
    
    <div className="border p-4 rounded bg-white max-w-lg">
      <div className="mt-3">
        <p className="text-sm text-gray-600 mb-1">Gym Level</p>

         <input
             type="range"
            min="0"
            max="2"
            step="1"
            value={gymLevel}
            onChange={(e) => setGymLevel(Number(e.target.value))}
            className="w-full"
        />

       <p className="text-sm text-gray-500">
            {gymLevel === 0 && "Rest Day"}
            {gymLevel === 1 && "Beginner Workout"}
            {gymLevel === 2 && "Full Workout"}
        </p>
    </div>
      <h2 className="text-xl font-semibold mb-3">
        Health Tracker
      </h2>

      <div className="space-y-2">

        <input
          type="number"
          placeholder="Sleep hours"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Protein (g)"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Heart rate"
          value={heartRate}
          onChange={(e) => setHeartRate(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={calculateHealth}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Calculate Health Score
        </button>

      </div>

      <p className="mt-4 font-bold">
        Health Score: {healthScore}
      </p>

    </div>
  );
}