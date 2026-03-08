"use client";

export default function Sidebar({ setActivePage, activePage }: any) {

  const linkStyle = (page: string) =>
    `cursor-pointer p-2 rounded ${
      activePage === page
        ? "bg-gray-700 text-white"
        : "hover:bg-gray-800"
    }`;

  return (
    <div className="w-60 min-h-screen bg-black text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        Life.OS.3
      </h1>

      <ul className="space-y-2">

        <li
          className={linkStyle("dashboard")}
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </li>

        <li
          className={linkStyle("tasks")}
          onClick={() => setActivePage("tasks")}
        >
          Tasks
        </li>

        <li
          className={linkStyle("study")}
          onClick={() => setActivePage("study")}
        >
          Study
        </li>

        <li
          className={linkStyle("health")}
          onClick={() => setActivePage("health")}
        >
          Health
        </li>

      </ul>

    </div>
  );
}