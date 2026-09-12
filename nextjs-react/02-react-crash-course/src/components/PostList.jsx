import Post from './Post';
import postClasses from './PostList.module.css';

function PostList() {
  return (
    <ul className={postClasses.posts}>
        <Post title="tarek" body="post body....."></Post>
        <Post title="tarek" body="post body....."></Post>
    </ul>
  );
}

export default PostList;