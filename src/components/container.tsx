import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('w-full max-w-[1312px] mx-auto px-4', className)}>{children}</div>
}
