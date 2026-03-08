import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition",
        className
      )}
      {...props}
    />
  );
}
<div className="mt-4 border p-4 rounded bg-white">

  <h2 className="font-semibold mb-2">
    Health Feedback
  </h2>
  <p className="text-2xl font-bold">{score}</p>
  {healthFeedback.length === 0 ? (
    <p className="text-gray-500">
      You're doing great today 👍
    </p>
  ) : (
    <ul className="space-y-1">
      {healthFeedback.map((f: string, i: number) => (
        <li key={i} className="text-sm text-gray-600">
          {f}
        </li>
      ))}
    </ul>
  )}
  {feedback.map((f, i) => (
    <li key={i}>{f}</li>
  ))}

</div>