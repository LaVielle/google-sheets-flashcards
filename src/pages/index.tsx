import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';
import { useEffect } from 'react';

import { ProfileCard } from '@/components/ProfileCard';
import Seo from '@/components/Seo';

export default function HomePage() {
  const session = useSession();

  useEffect(() => {
    if (session.data?.accessToken) {
      const getData = async () => {
        try {
          const response = await fetch('/api/getSheetsData');
          const data = await response.json();

          console.log('data', data);
        } catch (e) {
          console.log('getData error', e);
        }
      };

      getData().then();
    }
  }, [session.data?.accessToken]);

  return (
    <>
      <Seo templateTitle='Home' />

      <div className='flex flex-col p-32'>
        {session.status === 'authenticated' ? (
          <>
            {session.data?.user && <ProfileCard user={session.data.user} />}

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
