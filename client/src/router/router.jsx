import {createBrowserRouter} from 'react-router-dom'
import LayoutPublic from '../layout/LayoutPublic'
import LayoutPrivate from '../layout/LayoutPrivate'
import Home from '../pages/Home/Home'
import { getNew } from '../services/newServices'
import Detail from '../pages/Detail/Detail'
import AddForm from '../pages/AddForm/AddForm'
import EditForm from '../pages/EditForm/EditForm'
import NewsForm from '../components/NewsForm/NewsForm'
import Dashboard from '../pages/Dashboard/Dashboard'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic/>,
        children: [
            {
                index: true,
                element: <Home/>,
                /* loader: getNew */
            },
             {
                path: "dashboard",
                element:<LayoutPrivate/>,
                children:[
                    {
                        index:true,
                        element: <Dashboard/>,
                        loader: getNew
                    },
                    {
                        path: "detail/:id_news",
                        element: <Detail/>
                    },
                    {
                        path: "add",
                        element: <AddForm/>
                    },
                    {
                        path: "edit/:id",
                        element: <EditForm/>
                    },
                    {
                        path: "newsform",
                        element: <NewsForm/>
                    }
                ]

    }
]}
])

export default router