import { Form, Link } from "react-router";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <Form className={classes.form} method="post">
      <div>
        <label htmlFor="body">Text</label>
        <textarea id="body" name="body" required rows={3} />
      </div>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="author" required />
      </div>
      <div className={classes.actions}>
        <Link to={'..'}>
          Cancel
        </Link>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
}

export default NewPost;
