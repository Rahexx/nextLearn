'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Rahexx() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <p>Jesteś w segmencie Rahexx</p>
      <p>
        Ścieżka <b>/Rahexx</b>
      </p>
      <Link href='/'>Główna</Link>
      <Link href='/rahexx/info'>Info</Link>
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
