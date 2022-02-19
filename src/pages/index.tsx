import * as React from 'react';

import { useSession, signIn, signOut } from 'next-auth/react';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <>
      <Seo templateTitle='Home' />

      <div className={'flex flex-col p-32'}>
        <button
          type={'button'}
          onClick={() => signIn('google')}
          className={
            'rounded-md bg-indigo-500 px-8 py-4 text-2xl font-semibold text-white'
          }
        >
          Sign in
        </button>

        <div className={'h-5'} />

        <button
          type={'button'}
          onClick={() => signOut()}
          className={
            'rounded-md bg-red-500 px-8 py-4 text-2xl font-semibold text-white'
          }
        >
          Sign out
        </button>
      </div>
    </>
  );
}
