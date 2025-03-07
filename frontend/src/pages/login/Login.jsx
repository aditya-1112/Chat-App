import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js';

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const {loading, login} = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-sm bg-gray-400/10 bg-clip-padding backdrop-filter backdrop-blur-sm'>
				<h1 className='text-3xl text-gray-200 font-semibold text-center mb-3'>
					Login
					<span className='text-blue-700'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className='mb-2'>
						<label className='label p-1'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter your username' className='w-full input h-10'
						value={username} onChange={(e) => setUsername(e.target.value)}/>
					</div>
					<div>
						<label className='label p-1'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input type='password' placeholder='Enter password' className='w-full input h-10'
						value={password} onChange={(e) => setPassword(e.target.value)}/>
					</div>

					<div>
						<button className='btn btn-soft btn-block mt-7 border-0 bg-blue-900 hover:bg-blue-700 text-base'
						disabled={loading}>
							{loading? <span className='loading loading-spinner'></span> : "Login"}
						</button>
					</div>

					<div className='flex justify-center'>
						<Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block duration-150'>
							Don't have an account? Signup</Link>
					</div>
					
				</form>
			</div>
			
		</div>
	)
}

export default Login