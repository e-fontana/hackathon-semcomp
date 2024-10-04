import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      template: '%s | Pipe',
      default: 'Pipe',
    },
  }
  
  export default function StoreLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="min-h-screen w-full ">
          {children}
        </div>
    )
  }
  