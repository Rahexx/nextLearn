'use client';

import { useRouter } from 'next/navigation';

export default function CatchAll({ params }: { params: { slug: string[] } }) {
  const router = useRouter();

  return (
    <>
      <p>Jesteś w segmencie optionalCatchAll {params.slug}</p>
      <p>
        Ścieżka <b>/optionalCatchAll/{params.slug}</b>
      </p>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => router.push('/')}
      >
        Na Strone Główną
      </button>
    </>
  );
}
