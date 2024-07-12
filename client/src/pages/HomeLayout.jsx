/** HomeLayout.jsx build notes:
 *
 * This is a basic layout component that will be rendered in App.jsx.
 *
 * @returns {JSX.Element}
 * @constructor
 */
import {Outlet} from "react-router-dom";


const HomeLayout = () => {
    return (
        <>
            {/*<h1> Home Page </h1>*/}
            <Outlet />
        </>
    );
};

export default HomeLayout;