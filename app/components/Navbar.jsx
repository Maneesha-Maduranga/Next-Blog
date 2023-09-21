import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>ByteFutures</h1>
        <div className='flex gap-4 text-xl font-semibold '>
          <Link href='/' className='hover:border-b-2 border-white'>
            Home
          </Link>
          <Link href='/blogs' className='hover:border-b-2 border-white'>
            Blogs
          </Link>
          <Link href='/about' className='hover:border-b-2 border-white'>
            About Us
          </Link>
        </div>
      </nav>
    </>
  );
}
