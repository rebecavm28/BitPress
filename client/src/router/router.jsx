import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Notices from '../pages/Notices/Notices'
import LoginForm from '../pages/Login/LoginForm'
import RegisterForm from '../pages/Register/RegisterForm'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/notices",
                element: <Notices />
            },
            {
                path: "/Login",
                element: <LoginForm />
            },
            {
                path: "/Register",
                element: <RegisterForm />
            },
            {
                path: "/AddForm",
                element: <AddForm />
            }
        ]
    }
])

export default router