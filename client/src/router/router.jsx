import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import { getNew } from '../services/newServices'
import Detail from '../pages/Detail/Detail'
import AddForm from '../pages/AddForm/AddForm'
import EditForm from '../pages/EditForm/EditForm'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: getNew
            },
            {
                path: "/detail",
                element: <Detail/>
            },
            {
                path: "/add",
                element: <AddForm/>
            },
            {
                path: "/edit",
                element: <EditForm/>
            }
        ]
    }
])

export default router