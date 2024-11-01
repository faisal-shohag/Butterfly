'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function RestoreSection() {
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-br custom-glass-3 text-white from-purple-700 via-pink-500 to-red-500   p-4 rounded-xl shadow-lg mb-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
          Restore Text in Seconds
        </h2>
        <p className="text-sm text-center mb-4">
          Our AI restores damaged or faded text instantly.
        </p>
        <div className="custom-glass-3 p-3 rounded-lg shadow-md mb-5">
          <div className="flex items-center justify-center gap-5">
            <img
              src="https://i.postimg.cc/BncVDQBb/photo-2024-10-30-18-47-35.jpg"
              alt="Damaged book page"
              className="w-[200px] h-[200px] object-cover rounded-md shadow-sm shimmer"
            />
            <ArrowRight className="w-6 h-6 text-blue-300 animate-bounce" />
            <img
              src="https://i.postimg.cc/52Mr6FvD/photo-2024-10-30-18-47-35-2.jpg"
              alt="Restored book page"
              className="w-[200px] h-[200px] object-cover rounded-md shadow-sm shimmer"
            />
          </div>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: isProcessing ? '100%' : '0%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="h-1 bg-white mt-4 rounded-full"
          />
          <p className="text-center text-xs font-semibold mt-1">
            {isProcessing ? 'Processing...' : 'AI Restoration Complete'}
          </p>
        </div>
        <Link href="/restore">
          
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold py-2 px-4 rounded-xl shadow-md mx-auto block text-sm mt-4  duration-300 "
        >
            <div className='g-card px-4 py-2'>Try It Now</div>
          
        </motion.button>
        </Link>
      </div>
    </section>
  )
}