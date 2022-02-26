import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import { ProfileCard } from '@/components/ProfileCard';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <>
      <Seo templateTitle='Home' />

      <div className='flex flex-col p-32'>
        {session ? (
          <>
            {session.user && <ProfileCard user={session.user} />}

            <div className='h-5' />

            <button
              type='button'
              onClick={() => signOut()}
              className='rounded-md bg-red-500 px-8 py-4 text-2xl font-semibold text-white'
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            type='button'
            onClick={() => signIn('google')}
            className='rounded-md bg-indigo-500 px-8 py-4 text-2xl font-semibold text-white'
          >
            Sign in
          </button>
        )}
      </div>
    </>
  );
}
