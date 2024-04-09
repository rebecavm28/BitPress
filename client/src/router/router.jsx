import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import { getNew } from '../services/newServices'
import Detail from '../pages/Detail/Detail'
import AddForm from '../pages/AddForm/AddForm'

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
                path: "/detail/:id_news",
                element: <Detail/>
            },
            {
                path: "/add",
                element: <AddForm/>
            }

    
        ]
    }
])

export default router