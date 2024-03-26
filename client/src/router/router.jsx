import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Notices from '../pages/Notices/Notices'

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
            }
        ]
    }
])

export default router