import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homePage'
import SignupPage from './pages/authentication/signUpPage'
import LoginPage from './pages/authentication/loginPage'
import JobsPage from './pages/jobsPage'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>
  },
  {
    path:"/signup",
    element:<SignupPage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/jobs",
    element:<JobsPage/>
  },
])


function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
