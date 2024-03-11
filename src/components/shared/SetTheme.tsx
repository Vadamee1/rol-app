'use client'

import { Switch } from "@nextui-org/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunIcon } from "../icons/SunIcon"
import { MoonIcon } from "../icons/MoonIcon"

export const SetTheme = () => {
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [isDarkMode])

  if(!mounted) return null

  return (
    <Switch 
      size="sm"
      isSelected={isDarkMode}
      onValueChange={setIsDarkMode}
      startContent={<SunIcon/>}
      endContent={<MoonIcon/>}
    />
  )
}