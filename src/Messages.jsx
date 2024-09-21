import React from 'react';
import { useGetMessagesQuery } from './redux/contactSlice';

const Messages = () => {
  
  const { data, error, isLoading, isError } = useGetMessagesQuery();


  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  if (isError) {
    return <div>Error: {error?.data?.message || error.message}</div>;
  }

  
  return (
    <div className='text-white h-screen flex flex-col justify-center items-center gap-10'>
      <h1 className='text-[30px]'>Messages</h1>
      {data && data.length > 0 ? (
        <ul className='flex flex-col justify-around items-center gap-7  overflow-auto'>
          {data.map((message) => (
            <li key={message._id} className='rounded-xl  border-[2px] border-[rgba(_205,_210,_230,_0.21)] shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] p-7'>
              <p><strong>Name:</strong> {message.username}</p>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Message:</strong> {message.message}</p>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default Messages;
