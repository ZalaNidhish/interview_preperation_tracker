import {createBrowserRouter, RouterProvider} from 'react-router'
import AuthProtected from './protected/AuthProtected'
import AuthLayout from '../app/layouts/AuthLayout'
import Login from '../feature/auth/ui/Login'
import Register from '../feature/auth/ui/Register'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layouts/MainLayout'
import DashboardPage from '../feature/main/ui/pages/DashboardPage'
import {MainProvider} from '../app/context/MainContext'

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthProtected />,
        children: [
            {
                path: '',
                element: <AuthLayout />,
                children: [
                    {
                        path: '',
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <MainProvider><MainProtected /></MainProvider>,
        children: [
            {
                path: '',
                element: <MainLayout />,
                children: [
                    {
                        path: '',
                        element: <DashboardPage />
                    }
                ]
            }
        ]
    }
])

const AppRoutes = () => {
    return <RouterProvider router={router}/>
}

export default AppRoutes