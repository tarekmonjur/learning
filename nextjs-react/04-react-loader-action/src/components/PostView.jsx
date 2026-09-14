import classes from './PostDetails.module.css';

function PostView({ post }) {
  return (
    <main className={classes.details}>
      <p className={classes.author}>{post.author}</p>
      <p className={classes.text}>{post.body}</p>
    </main>
  );
}

export default PostView;