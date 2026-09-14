import { useLoaderData } from "react-router";
import Post from "./Post";
import postClasses from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();
  return (
    <>
      { posts?.length > 0 &&
        <ul className={postClasses.posts}>
          {posts.map((post) => (
            <Post key={post.body} post={post}></Post>
          ))}
        </ul>
      }
      { posts?.length === 0 && (
        <div style={{ textAlign: 'center', color: 'black' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
