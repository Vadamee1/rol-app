import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/config/fonts"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <main style={{height: "100%", minHeight: "100vh"}} >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
