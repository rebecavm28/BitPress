import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import { getNew } from '../services/newServices'
import Detail from '../pages/Detail/Detail'

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
                path: "/notices",
                element: <Notices />
            },
            {
                path: "/detail",
                element: <Detail/>
            }
    
        ]
    }
])

export default router