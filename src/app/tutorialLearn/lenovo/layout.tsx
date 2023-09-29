import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lenovo',
};

export default function LenovoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href='/tutorialLearn'>Go to tutorialLearn</Link>
      {children}
    </>
  );
}
