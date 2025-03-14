import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useConversation from '../../zustand/useConversation'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
	const {messages, loading} = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({behaviour:"smooth"});
		},100)
	}, [messages])
	//console.log(messages);
	return (
		<div className='px-4 overflow-auto flex-1'>
			{!loading && messages.length > 0 && messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message key={message._id} message={message}/>
					</div>
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