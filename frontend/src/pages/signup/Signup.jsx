import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-sm bg-gray-400/10 bg-clip-padding backdrop-filter backdrop-blur-sm'>
				<h1 className='text-3xl text-gray-200 font-semibold text-center mb-3'>
					Signup
					<span className='text-blue-700'> ChatApp</span>
				</h1>

				<form className='text-gray-50'>
          <div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='Enter your full name' className='w-full input h-10'/>
					</div>
					<div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter your username' className='w-full input h-10'/>
					</div>
          <div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input type='text' placeholder='Enter password' className='w-full input h-10 '/>
					</div>
					<div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input type='text' placeholder='Re-enter password' className='w-full input h-10'/>
					</div>

          <GenderCheckbox />

					<div>
						<button className='btn btn-soft btn-block mt-7 border-0 bg-blue-900 hover:bg-blue-700 text-base'>
              Signup
            </button>
					</div>

          <div className='flex justify-center'>
						<a href='#' className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block duration-150'>
            Already have an account? Login</a>
					</div>
				</form>
			</div>
			
		</div>
  )
}

export default Signup