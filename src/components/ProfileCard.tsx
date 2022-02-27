import Image from 'next/image';
import { DefaultSession } from 'next-auth';
import React from 'react';

type Props = {
  user: NonNullable<DefaultSession['user']>;
};

export const ProfileCard: React.FC<Props> = ({ user }) => {
  return (
    <div className='mx-auto flex items-center rounded-lg border-2 border-gray-200 bg-gray-50 p-4 shadow'>
      <div className='mr-5 h-20 w-20 overflow-hidden rounded-full'>
        {user.image && (
          <Image
            src={user.image}
            width='100%'
            height='100%'
            layout='responsive'
          />
        )}
      </div>
      <div>
        <p className='text-xl font-semibold tracking-wide text-gray-700 md:text-2xl lg:text-3xl '>
          {user.name}
        </p>
        <p className='text-gray-500'>{user.email}</p>
      </div>
    </div>
  );
};
