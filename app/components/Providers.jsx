'use client'
import React, { createContext, useState, useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: () => {}
})

export default function Providers({ children }) {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  return (
    <SessionProvider>
      <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
        {children}
      </ThemeContext.Provider>
    </SessionProvider>
  )
}
