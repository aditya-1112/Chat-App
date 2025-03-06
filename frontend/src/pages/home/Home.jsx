import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex overflow-hidden sm:h-[550px] md:h-[650px] rounded-lg bg-gray-400/20 bg-clip-padding
    backdrop-filter backdrop-blur-sm'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home