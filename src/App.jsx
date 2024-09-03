import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homePage'
import SignupPage from './pages/authentication/signUpPage'
import LoginPage from './pages/authentication/loginPage'
import JobsPage from './pages/jobsPage'
import BrowsePage from './pages/browsePage'
import ProfilePage from './pages/profilePage'
import JobDescriptionPage from './pages/jobDescriptionPage'

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
  {
    path:"/browse",
    element:<BrowsePage/>
  },
  {
    path:"/profile",
    element:<ProfilePage/>
  },
  {
    path:"/description/:id",
    element:<JobDescriptionPage/>
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
