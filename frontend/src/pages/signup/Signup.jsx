import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName:'',
		username:'',
		password:'',
		confirmPassword:'',
		gender:''
	})

	const {loading, signup} = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({...inputs, gender});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	}

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-sm bg-gray-400/10 bg-clip-padding backdrop-filter backdrop-blur-sm'>
				<h1 className='text-3xl text-gray-200 font-semibold text-center mb-3'>
					Signup
					<span className='text-blue-700'> ChatApp</span>
				</h1>

				<form className='text-gray-50' onSubmit={handleSubmit}>
          <div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='Enter your full name' className='w-full input h-10'
						value={inputs.fullName} 
						onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
					</div>
					
					<div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter your username' className='w-full input h-10'
						value={inputs.username} 
						onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
					</div>
          
					<div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input type='password' placeholder='Enter password' className='w-full input h-10 '
						value={inputs.password} 
						onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
					</div>
					
					<div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input type='password' placeholder='Re-enter password' className='w-full input h-10'
						value={inputs.confirmPassword} 
						onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
					</div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<div>
						<button className='btn btn-soft btn-block mt-7 border-0 bg-blue-900 hover:bg-blue-700 text-base'
						disabled={loading}>
              {loading? <span className='loading loading-spinner'></span>: "Signup"}
            </button>
					</div>

          <div className='flex justify-center'>
						<Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block duration-150'>
            Already have an account? Login</Link>
					</div>
				</form>
			</div>
			
		</div>
  )
}

export default Signup