import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Outlet, useNavigation } from "react-router";
import Loading from "../components/Loading";
import PostList from "../components/PostList";

function Posts() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Outlet />
      {isLoading && <Loading />}
      <PostList></PostList>
    </>
  );
}

export function PostSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1rem",
      }}
    >
      <div>
        <Skeleton
          count={3}
          height={140}
          width={400}
          style={{ marginBottom: "1rem" }}
        />
      </div>
      <div>
        <Skeleton
          count={3}
          height={140}
          width={400}
          style={{ marginBottom: "1rem" }}
        />
      </div>
    </div>
  );
}

export default Posts;
