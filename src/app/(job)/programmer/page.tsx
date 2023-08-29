'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Rahexx() {
  const router = useRouter();

  return (
    <>
      <p>Jesteś w segmencie programmer</p>
      <p>
        Ścieżka <b>/programmer</b>
      </p>
      <Link href='/'>Główna</Link>
      <Link href='/shopAssistant'>Shopp assistant</Link>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => router.push('/')}
      >
        Na Strone Główną
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => router.push('/rahexx/info')}
      >
        Na Strone Rahexx Info
      </button>
    </>
  );
}
