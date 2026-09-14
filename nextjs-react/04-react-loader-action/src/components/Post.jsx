import { Link } from 'react-router'
import postClasses from './Post.module.css'

function Post({post}) {
  return (
    <li className={postClasses.post}>
      <Link to={`/posts/${post.id}`}>
        <p className={postClasses.author}>{post.author}</p>
        <p className={postClasses.text}>{post.body}</p>
      </Link>
    </li>
  )
}

export default Post