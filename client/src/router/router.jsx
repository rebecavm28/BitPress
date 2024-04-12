import {createBrowserRouter} from 'react-router-dom'
import LayoutPublic from '../layout/LayoutPublic'
import Home from '../pages/Home/Home'
import { getNew } from '../services/newServices'
import Detail from '../pages/Detail/Detail'
import AddForm from '../pages/AddForm/AddForm'
import EditForm from '../pages/EditForm/EditForm'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/UserForms/Login/Login'
import UserForm from '../pages/UserForms/Registrer/UserForm'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
             {
                path: "/dashboard",
                element: <Dashboard/>,
                loader: getNew
            },
            {
                path: "/detail/:id_news",
                element: <Detail/>
            },
            {
                path: "/add",
                element: <AddForm/>
            },
            {
                path: "/edit/:id_news",
                element: <EditForm/>
            },
            {
                path: "/register",
                element: <UserForm/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default router