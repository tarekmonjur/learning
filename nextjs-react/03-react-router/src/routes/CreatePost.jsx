import Modal from "../components/Modal";
import NewPost from "../components/NewPost";

function CreatePost() {
  // const addPostHandler = (post) => {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(post),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   setPosts((prevPosts) => {
  //     return [post, ...prevPosts];
  //   });
  // }

  return (
    <Modal>
      <NewPost />
    </Modal>
  );
}

export default CreatePost;
