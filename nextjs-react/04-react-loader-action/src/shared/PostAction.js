import { redirect } from "react-router";

export async function postAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect('/posts');
}


// export async function postAction(action) {
//   console.log('action', action);
// }