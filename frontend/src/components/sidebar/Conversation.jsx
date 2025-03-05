import React from 'react'

const Conversation = () => {
	return (
		<>
			<div className='flex gap-2 items-center hover:bg-sky-500/30 rounded p-2 cursor-pointer duration-75'>
				<div className='avatar avatar-online'>
					<div className='w-12 rounded-full'>
						<img src='https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/27-man-1024.png' alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>John Doe</p>
						<span className='text-xl'>😍</span>
					</div>
				</div>
			</div>
			<div className='divider my-0 py-0 h-1'></div>
		</>

	)
}

export default Conversation