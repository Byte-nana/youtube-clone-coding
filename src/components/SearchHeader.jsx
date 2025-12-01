import React, { useEffect, useState } from 'react';
import { IoLogoYoutube } from 'react-icons/io';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <IoLogoYoutube className='text-3xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type='text'
          name='search'
          id='search'
          value={text}
          placeholder='Search...'
          onChange={handleChange}
        />
        <button className='bg-zinc-600 px-4' type='submit'>
          <FaMagnifyingGlass />
        </button>
      </form>
    </header>
  );
}
