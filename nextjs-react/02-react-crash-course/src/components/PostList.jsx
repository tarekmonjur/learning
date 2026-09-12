import { useContext, useEffect, useState } from "react";
import { AppContext } from './Context';
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import postClasses from "./PostList.module.css";

function PostList(props) {
  const appContext = useContext(AppContext);
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  
  const addPostHandler = (post) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  }

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
      {appContext.openPostModal && (
        <Modal onClose={props.onClosePost}>
          <NewPost
            onCancel={props.onClosePost}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}

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
