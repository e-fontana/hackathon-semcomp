import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export const Container = ({ children, className, ...props }: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={twMerge("h-full w-full flex-col flex p-4", className)} {...props}>
            {children}
        </div>
    )
}