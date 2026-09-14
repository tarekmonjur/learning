import { useEffect, useState } from "react";
import Post from "./Post";
import postClasses from "./PostList.module.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }
    
    fetchPosts();
  }, []);


  return (
    <>

      {!isFetching && posts.length > 0 &&
        <ul className={postClasses.posts}>
          {posts.map((post) => (
            <Post key={post.body} post={post}></Post>
          ))}
        </ul>
      }

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'black' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: 'center' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostList;
