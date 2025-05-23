import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/Socketontext';

const Conversation = ({conversation, emoji, lastIdx}) => {
	const {selectedConversation, setSelectedConversation} = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	
	const {onlineUsers} = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-gray-400/40 rounded p-2 cursor-pointer
				${isSelected? "bg-sky-500/80": ""}`}
				onClick={() => setSelectedConversation(conversation)}>
				<div className={`avatar ${isOnline? "avatar-online":""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-semibold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
			
		</>

	)
}

export default Conversation