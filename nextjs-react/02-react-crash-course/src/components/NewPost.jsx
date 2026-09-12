import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
    const [formText, setFormText] = useState("");
  const [formAuthor, setFormAuthor] = useState("");
  
  function postFormChangeHandler(event) {
    if (event.target.id === "body") {
      setFormText(event.target.value);
    }
    if (event.target.id === "name") {
      setFormAuthor(event.target.value);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: formText,
      author: formAuthor,
    };

    onAddPost(postData);
    onCancel();
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={postFormChangeHandler} />
        <span>{formText.length}/500</span>
      </div>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={postFormChangeHandler} />
        <span>{formAuthor.length}/25</span>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
