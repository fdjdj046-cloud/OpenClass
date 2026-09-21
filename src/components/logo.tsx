import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.25" />
      <ellipse cx="16" cy="16" rx="6.2" ry="13" stroke="currentColor" strokeWidth="1.25" />
      <path d="M16 3v26M4.5 16h23" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function Wordmark({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Mark className={light ? "text-photo" : "text-ink"} />
      <div className="leading-none">
        <p
          className={cn(
            "font-display text-lg tracking-tight",
            light ? "text-photo" : "text-ink",
          )}
        >
          Меридиан
        </p>
        <p
          className={cn(
            "mt-0.5 text-[10px] uppercase tracking-[0.18em]",
            light ? "text-photo/70" : "text-mist",
          )}
        >
          Группа компаний
        </p>
      </div>
    </div>
  );
}
