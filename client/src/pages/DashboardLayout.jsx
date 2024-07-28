import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { SmallSidebar, LargeSidebar, Navbar } from '../components';
import { useState, createContext, useContext } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {

    /**
     * Temporary component sets up the DashboardContext.Provider
     * using the following variables:
     *
     * @constant {Object} user - Represents a user with a name property.
     * @constant {boolean} showSidebar - State to manage sidebar visibility.
     * @constant {Function} setShowSidebar - Setter for showSidebar state.
     * @constant {boolean} isDarkTheme - State to manage dark theme.
     * @constant {Function} setIsDarkTheme - Setter for isDarkTheme state.
     *
     * @function toggleDarkTheme - Toggles the dark theme state.
     * @function toggleSidebar - Toggles the sidebar visibility state.
     * @function logoutUser - Logs out the user.
     *
     * @returns {JSX.Element} The DashboardLayout component.
     */
    const user = { name: 'josh' };
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);


    // GLOBAL Values - Placeholder functions for setting up the context provider
    const toggleDarkTheme = () => {
        console.log('toggle dark theme');
    };
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const logoutUser = async () => {
        console.log('logout user');
    };


    return (

        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleDarkTheme,
                toggleSidebar,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <LargeSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

// Custom Context Hook
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;