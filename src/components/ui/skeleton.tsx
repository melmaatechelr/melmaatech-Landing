import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'circular' | 'rectangular' | 'text'
}

function Skeleton({
  className,
  variant = 'default',
  ...props
}: SkeletonProps) {
  const variants = {
    default: "rounded-md",
    circular: "rounded-full",
    rectangular: "rounded-none",
    text: "rounded-sm h-4"
  }

  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton, type SkeletonProps }
