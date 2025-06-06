import React from 'react'
import Conversation from "./Conversation"
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
	const {loading, conversations} = useGetConversations();

	return (
		<div className='flex flex-col py-2 overflow-auto mb-4'>
			{conversations.map((conversation, idx) => (
				<Conversation 
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length -1 }/>
			))}

			{loading? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	)
}

export default Conversations