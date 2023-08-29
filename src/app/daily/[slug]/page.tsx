'use client';

import { useRouter } from 'next/navigation';

export default function Daily({ params }: { params: { slug: string } }) {
  const router = useRouter();

  return (
    <>
      <p>Jesteś w segmencie daily {params.slug}</p>
      <p>
        Ścieżka <b>/daily/{params.slug}</b>
      </p>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => router.push('/')}
      >
        Na Strone Główną
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => router.push(`/daily/${Number(params.slug) - 1}`)}
      >
        Na poprzednią strone
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => router.push(`/daily/${Number(params.slug) + 1}`)}
      >
        Na kolejną strone
      </button>
    </>
  );
}
