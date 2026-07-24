"use client"
import Footer from '@/components/footer'
import Runner from '@/components/Runner'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen w-full'>
      <Runner/>
      <Footer/>
    </div>
  )
}

export default page