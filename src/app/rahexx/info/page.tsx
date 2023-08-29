import Link from 'next/link';

export default function RahexxInfo() {
  return (
    <>
      <p>Jesteś w segmencie Info</p>
      <p>
        Ścieżka <b>/Rahexx/info</b>
      </p>
      <Link href='/'>Główna</Link>
      <Link href='/rahexx'>Rahexx</Link>
    </>
  );
}
