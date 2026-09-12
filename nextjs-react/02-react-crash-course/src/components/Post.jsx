import postClasses from './Post.module.css'

function Post(props) {

  return (
    <li className={postClasses.post}>
        <p className={postClasses.author}>{props.title}</p>
        <p className={postClasses.text}>{props.body}</p>
    </li>
  )
}

export default Post