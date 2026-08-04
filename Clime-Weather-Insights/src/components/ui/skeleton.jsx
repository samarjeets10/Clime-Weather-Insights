import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md dark:bg-accent bg-foreground/25", className)}
      {...props} />
  );
}

export { Skeleton }
