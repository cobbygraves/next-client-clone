'use client'
import { ThemeContext } from './Providers'
import { useState, useContext } from 'react'
import { Switch } from 'antd'
import { motion } from 'framer-motion'

export default function Navbar() {
  const ctx = useContext(ThemeContext)

  const [isMobile, setIsMobile] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  const changeTheme = () => {
    setDarkTheme((prevState) => !prevState)
    if (ctx.theme === 'light') {
      ctx.changeTheme('dark')
    } else {
      ctx.changeTheme('light')
    }
  }
  return (
    <nav className='bg-white dark:bg-black text-black dark:text-white'>
      <div className='mx-auto max-w-7xl px-2 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={() => setIsMobile((prevState) => !prevState)}
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>

              <svg
                className='hidden h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <motion.div
              className='flex flex-shrink-0 items-center'
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate: 45 }}
            >
              <img
                className='h-10 w-10'
                src='/ecobank.png'
                alt='Your Company'
              />
            </motion.div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className=' hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium '
                  aria-current='page'
                >
                  Dashboard
                </a>
                <a
                  href='/teams'
                  className='hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                >
                  Team
                </a>
                <a
                  href='#'
                  className='hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium '
                >
                  Projects
                </a>
                <a
                  href='#'
                  className=' hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium '
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='flex gap-2 items-center'>
              <p className='hidden md:block font-semibold text-xs'>Light</p>
              <Switch
                defaultChecked
                onChange={changeTheme}
                checked={darkTheme}
                className='bg-gray-400'
              />
              <p className='hidden md:block font-semibold text-xs'>Dark</p>
            </div>

            <div className='relative ml-3'>
              <div>
                <button
                  type='button'
                  className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='/graves.jpg'
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className='sm:hidden' id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <a
              href='#'
              className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
              aria-current='page'
            >
              Dashboard
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Team
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Calendar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
