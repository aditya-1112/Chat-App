import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className='flex overflow-hidden sm:h-[450px] md:h-[550px] rounded-lg bg-gray-400/20 bg-clip-padding
    backdrop-filter backdrop-blur-sm'>
      <Sidebar />
    </div>
  )
}

export default Home