
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { OpeningCrawl } from './pages/OpeningCrawl/OpeningCrawl';
import { PersonDetails } from './pages/PersonDetails/PersonDetails';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <OpeningCrawl />,
  },
  {
    path: "/characters",
    element: <Home />,
  },
  {
    path: "/characters/:id",
    element: <PersonDetails />,
  },
])

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
