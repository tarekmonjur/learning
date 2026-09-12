import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
    const [formText, setFormText] = useState('');
    function changeBodyHandler(event) {
        console.log(event.target.value);
        setFormText(event.target.value);
    }

  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
        <span>{formText.length}/500</span>
      </div>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </div>
    </form>
  );
}

export default NewPost;