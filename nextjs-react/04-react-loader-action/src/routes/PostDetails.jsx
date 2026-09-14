import { Link, useLoaderData } from 'react-router';

import Modal from '../components/Modal';
import classes from '../components/PostDetails.module.css';
import PostView from '../components/PostView';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <PostView post={post} />
    </Modal>
  );
}

export default PostDetails;