import { Metadata } from 'next';
import styles from './styles.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TutorialLearn',
};

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.lenovoNav}>
        <Link href='/tutorialLearn/lenovo' className={styles.lenovoNavItem}>
          Go to Lenovo page
        </Link>
      </div>
      {children}
    </>
  );
}
