/** Page build notes:
 *
 * All pages are built using the same structure, and will be rendered in this App.jsx file.
 *
 *
 */
// External imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Local imports
import {
    HomeLayout,
    Landing,
    Signup,
    Login,
    DashboardLayout,
    Error,
    NewJob,
    Jobs,
    UserProfile,
    Admin,
} from './pages';

// createBrowserRouter => create router object.
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'signup',
                element: <Signup />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        index: true, // userprofile API endpoint
                        element: <UserProfile />,
                    },
                    {
                        path: 'new-job' ,
                        element: <NewJob />,
                    },
                    {
                        path: 'all-jobs',
                        element: <Jobs />,
                    },
                    {
                        path: 'admin',
                        element: <Admin />,
                    },
                ],
            },
        ],
    },
]);

// RouterProvider component provides the router context to rest of app.
const App = () => {
    return <RouterProvider router={router} />;
};
export default App;