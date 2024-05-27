import { use } from 'react'

function PostItem() {
  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    return response.json()
  }

  const posts = use(fetchPosts())

  return (
    <div className='flex flex-col items-center my-4'>
      {posts.map((post) => (
        <div key={post.id} className='bg-slate-800 p-4 my-6 w-1/2 rounded-lg'>
          <h2 className='text-xl font-bold'>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostItem
