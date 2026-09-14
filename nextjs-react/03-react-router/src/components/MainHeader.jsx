import { MdMessage, MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/posts/create" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </div>
  );
}

export default MainHeader;