'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <SessionProvider>
      <NextUIProvider navigate={router.push}>
        <ToastContainer theme='dark'/>
        {children}
      </NextUIProvider>
    </SessionProvider>
  )
}