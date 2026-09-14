import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import CreatePost from './routes/CreatePost.jsx'
import Posts from './routes/Posts.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: '/',
        index: true,
        Component: Posts,
      },
      {
        path: '/posts',
        Component: Posts,
        children: [
          {
            path: 'create',
            Component: CreatePost,
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
