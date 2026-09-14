
export async function postsLoader() {
  try {
    const response = await fetch('http://localhost:8080/posts');
    if (!response.ok) {
      throw new Response('Could not fetch posts', { status: 500 });
    } else {
      const resData = await response.json();
      return resData.posts;
    }
  } catch (error) {
    console.error(error.message);
    return [];
  }
}


export async function postLoader({params}) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}