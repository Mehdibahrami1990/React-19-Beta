import { Suspense } from 'react';
import PostItems from './PostItems';

function PostList() {
  return (
    <Suspense
      fallback={
        <h2 className="text-2xl text-center font-bold mt-5">Loading ...</h2>
      }
    >
      <PostItems />
    </Suspense>
  );
}
export default PostList;
