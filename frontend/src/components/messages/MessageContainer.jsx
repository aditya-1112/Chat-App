import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
	const noChatSelected = true;
	return (

		<div className='lg:min-w-150 md:min-w-100 flex flex-col '>
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-slate-500 px-4 py-3 mb-2 text-lg'>
						<span className='label-text'>To: </span>
						<span className='font-bold text-gray-900'>John Doe</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	)
}

export default MessageContainer

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='text-center px-4 sm:text-lg md:text-2xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome👋 John Doe ❄️</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	)
}