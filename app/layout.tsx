// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RoboFree",
  description: "A warm community choosing simple, human lives away from robots and screens.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-emerald-50 text-emerald-950 font-light antialiased">
        {children}
      </body>
    </html>
  )
}
