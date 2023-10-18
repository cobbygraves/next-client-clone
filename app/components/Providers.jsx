'use client'
import React, { createContext, useState } from 'react'
import { SessionProvider } from 'next-auth/react'

export const ThemeContext = createContext({
  darkMode: false,
  changeDarkMode: () => {}
})

export default function Providers({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <SessionProvider>
      <ThemeContext.Provider
        value={{ darkMode: isDarkMode, changeDarkMode: setIsDarkMode }}
      >
        {children}
      </ThemeContext.Provider>
    </SessionProvider>
  )
}
