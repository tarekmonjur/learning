import { Outlet } from "react-router";
import PostList from "../components/PostList";

function Posts() {

  return (
    <>
      <Outlet />
      <PostList></PostList>
    </> 
  );
}

export default Posts;

