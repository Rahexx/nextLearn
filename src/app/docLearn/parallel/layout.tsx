import { reactNode } from '@/globalTypes';

export default function Layout({
  children,
  header,
  nav,
}: {
  children: reactNode;
  header: reactNode;
  nav: reactNode;
}) {
  return (
    <>
      {nav}
      {header}
      {children}
    </>
  );
}
