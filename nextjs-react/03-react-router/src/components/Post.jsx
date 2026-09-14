import postClasses from './Post.module.css'

function Post({post}) {

  return (
    <li className={postClasses.post}>
        <p className={postClasses.author}>{post.author}</p>
        <p className={postClasses.text}>{post.body}</p>
    </li>
  )
}

export default Post