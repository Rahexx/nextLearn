import Image from 'next/image';

export default function Header() {
  return (
    <Image
      src='/focused.jpg'
      alt='Picture of the author'
      height={400}
      width={800}
    />
  );
}
