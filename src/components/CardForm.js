import React, { useState } from 'react';

const CardForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: '',
    joined: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.password === formData.confirm) {
      console.log('You have sign up successful 🎉');
    } else {
      console.log("password doesn't matching");
      return;
    }

    if (formData.joined) {
      console.log('Now you are subscribed on our newletter 📰');
    }
  };
  return (
    <div className='w-[400px] px-8 py-20 bg-white rounded-md'>
      <form className='space-y-7' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email Address'
          className='border-2 border-gray-400 outline-none rounded-md text-xl p-2 w-full'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type='password'
          placeholder='Password'
          className='border-2 border-gray-400 outline-none rounded-md text-xl p-2 w-full'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type='password'
          placeholder='Confirm password'
          className='border-2 border-gray-400 outline-none rounded-md text-xl p-2 w-full'
          name='confirm'
          value={formData.confirm}
          onChange={handleChange}
        />

        <div className='flex gap-5 items-center'>
          <input type='checkbox' id='check' name='joined' checked={formData.joined} onChange={handleChange} />
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
