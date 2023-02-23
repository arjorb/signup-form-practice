import React from 'react';

const CardForm = () => {
  return (
    <div className='w-[400px] px-8 py-20 bg-white rounded-md'>
      <form className='space-y-7'>
        <input
          type='text'
          placeholder='Email Address'
          className='border-2 border-gray-400 outline-none rounded-md text-xl p-2 w-full'
        />

        <input
          type='password'
          placeholder='Password'
          className='border-2 border-gray-400 outline-none rounded-md text-xl p-2 w-full'
        />

        <input
          type='password'
          placeholder='Confirm password'
          className='border-2 border-gray-400 outline-none rounded-md text-xl p-2 w-full'
        />

        <div className='flex gap-5 items-center'>
          <input type='checkbox' id='check' />
          <label htmlFor='check'>I want to join the newsletter</label>
        </div>

        <div className='flex justify-center w-full'>
          <button className='bg-gradient-to-r from-pink-500 to-pink-600 py-2 px-14 rounded-md text-white font-semibold text-lg'>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
