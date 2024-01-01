'use client'
import Navbar from './components/Navbar'
// import { motion } from 'framer-motion'
// import BarChart from './components/Charts'

export default function Home() {
  return (
    <div className='bg-white dark:bg-black text-black dark:text-white min-h-screen '>
      <Navbar />
      <main className='mx-auto max-w-7xl px-2 lg:px-8'>
        <p className='text-2xl font-light text-center my-5'>
          Start Your Application Here...
        </p>
        {/* <BarChart /> */}
      </main>
    </div>
  )
}
