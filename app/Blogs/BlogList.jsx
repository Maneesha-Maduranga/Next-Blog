async function getBlogs() {
  const res = await fetch('http://localhost:4000/blogs', { cache: 'no-store' });
  return res.json();
}

export default async function BlogList() {
  const blogs = await getBlogs();

  return (
    <div className='grid grid-cols-3 gap-4'>
      {blogs.map((item) => (
        <div key={item.id}>
          <h1>Eash Blof</h1>
        </div>
      ))}
    </div>
  );
}
