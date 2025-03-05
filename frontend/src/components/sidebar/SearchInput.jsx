import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-1'>
			<input type='text' placeholder='Search...' className='input rounded-full'/>
			<button type='submit' className='btn btn-circle bg-sky-500 border-0 text-white mx-2 hover:bg-sky-400'>
			<IoSearchSharp className='h-5 w-5'/>
			</button>
    </form>
  )
}

export default SearchInput