import React from 'react'

export default function VideoBanner() {
  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Build Your Dream Home With Sharda Home Estate</h1>
        <p className="text-xl">Discover Your Future Home</p>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="https://property-pied-pi.vercel.app/images/5.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
