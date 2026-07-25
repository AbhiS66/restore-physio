import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ViteReactSSG } from 'vite-react-ssg'
import './styles/index.css'
import { routes } from './data/routes.jsx'

// Prevent browser from restoring scroll position on reload
if (typeof window !== 'undefined') {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}

export const createRoot = ViteReactSSG(
  { routes },
  ({ router }) => (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  ),
);