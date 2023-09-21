import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between px-4'>
        <h1>ByteFutures</h1>
        <ul className='flex gap-4'>
          <Link href='/'>Home</Link>
          <Link href='/blogs'>Blogs</Link>
          <Link href='/about'>About Us</Link>
          <Link href='/contact'>Contact Us</Link>
        </ul>
      </nav>
    </>
  );
}
