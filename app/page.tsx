"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import HealthTracker from "@/components/HealthTracker";
import StudyTracker from "@/components/StudyTracker";
import TaskTracker from "@/components/TaskTracker";
import Dashboard from "@/components/Dashboard";
export default function Home() {
  const [healthScore, setHealthScore] = useState(0);
  const [healthFeedback, setHealthFeedback] = useState<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([]);
  const [activePage, setActivePage] = useState("dashboard");
  const urgentTasks = tasks.length;
  return (
    <div className="flex">

      <Sidebar
        setActivePage={setActivePage}
        activePage={activePage}
      />

      <div className="flex-1 bg-gray-100 min-h-screen p-10">
        {activePage === "tasks" && (
          <TaskTracker tasks={tasks} setTasks={setTasks} />
        )}
        {activePage === "dashboard" && (
          <Dashboard
            totalTasks={tasks.length}
            studyHours={0}
            healthScore={healthScore}
            urgentTasks={urgentTasks}
            healthFeedback={healthFeedback}
          />
        )}

        {activePage === "health" && (
          <HealthTracker
            healthScore={healthScore}
            setHealthScore={setHealthScore}
            healthFeedback={healthFeedback}
            setHealthFeedback={setHealthFeedback}
          />
        )}

        {activePage === "study" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Study Tracker
            </h1>

            <p>Study tracker UI goes here.</p>
          </div>
        )}

        {activePage === "tasks" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Task Manager
            </h1>

            <p>Task manager UI goes here.</p>
          </div>
        )}

      </div>

    </div>
  );
}