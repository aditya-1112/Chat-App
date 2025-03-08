import React from 'react'
import Message from './Message'
import useConversation from '../../zustand/useConversation'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
	const {messages, loading} = useGetMessages();
	//console.log(messages);
	return (
		<div className='px-4 overflow-auto flex-1'>
			{!loading && messages.length > 0 && messages.map((message) => (
					<Message key={message._id} message={message}/>
				))
			}

			{loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx}/>)}
			{!loading && messages.length === 0 && (
				<p className='text-center mt-5'>Send a message to start the conversation</p>
			)}
		</div>
	)
}

export default Messages