import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';


const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    if(search.length < 3){
      return toast.error('Search term must be at least 3 characters long!')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }
    else{
      toast.error("No user found!");
    }

  }
  return (
    <form className='flex items-center gap-1' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search...' className='input rounded-full'
      value={search} onChange={(e) => setSearch(e.target.value)}/>
			<button type='submit' className='btn btn-circle bg-sky-500 border-0 text-white mx-2 hover:bg-sky-400'>
			<IoSearchSharp className='h-5 w-5'/>
			</button>
    </form>
  )
}

export default SearchInput