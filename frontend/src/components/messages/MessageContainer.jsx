import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { UseAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
	const {selectedConversation, setSelectedConversation} = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation])
	
	return (

		<div className='lg:min-w-150 md:min-w-100 flex flex-col '>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-slate-400 px-4 py-3 mb-2 text-lg shadow-sm flex items-center'>
						{/* <span className='label-text'>To: </span> */}
						<img src={selectedConversation.profilePic} className='h-8 mr-3'/>
						<span className='font-bold text-gray-900'>{selectedConversation.fullName}</span>
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
	const {authUser} = UseAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='text-center px-4 sm:text-lg md:text-2xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome👋 {authUser.fullName} ❄️</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	)
}