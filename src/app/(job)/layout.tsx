import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='bg-cyan-600'>{children}</div>;
}
