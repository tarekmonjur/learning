import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import CreatePost from './routes/CreatePost.jsx'
import PostDetails from './routes/PostDetails.jsx'
import Posts, { PostSkeleton } from './routes/Posts.jsx'
import RootLayout from './routes/RootLayout.jsx'
import { postAction } from './shared/PostAction.js'
import { postLoader, postsLoader } from './shared/PostLoader.js'

// function shouldRevalidate() {
//   return true;
// }


const router = createBrowserRouter ([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: '/',
        index: true,
        Component: Posts,
        loader: postsLoader,
        HydrateFallback: PostSkeleton
      },
      {
        path: '/posts',
        Component: Posts,
        loader: postsLoader,
        // shouldRevalidate: shouldRevalidate,
        HydrateFallback: PostSkeleton,
        children: [
          {
            path: 'create',
            Component: CreatePost,
            action: postAction,
          },
          {
            path: ':postId',
            Component: PostDetails,
            loader: postLoader,
          }
        ]
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
