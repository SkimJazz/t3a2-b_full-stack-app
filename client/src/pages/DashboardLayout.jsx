import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { SmallSidebar, LargeSidebar, Navbar } from '../components';

const DashboardLayout = () => {
    return (
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
    );
};

export default DashboardLayout;