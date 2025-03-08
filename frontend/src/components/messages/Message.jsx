import React from 'react'
import { UseAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
	const {authUser} = UseAuthContext();
	const {selectedConversation} = useConversation();
	const fromMe = message.senderId === authUser._id;
	const chatClassName = fromMe? "chat-end" : "chat-start";
	const chatProfilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe? "bg-blue-500":"";


	return (
		<div>
			<div className={`chat ${chatClassName}`}>
				<div className="chat-image avatar">
					<div className="w-10 rounded-full">
						<img
							alt="Tailwind CSS chat bubble component"
							src={chatProfilePic}/>
					</div>
				</div>
				<div className={`chat-bubble text-white ${bubbleBgColor} shadow`}>
					{message.message}
				</div>
				<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>13:51</div>
			</div>
		</div>
	)
}

export default Message