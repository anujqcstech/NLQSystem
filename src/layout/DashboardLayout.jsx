import { Outlet } from "react-router-dom";
import DashSidebarLeft from "../components/DashSidebarLeft";
import DashSidebarRight from "../components/DashSidebarRight";
import HeaderDashboard from "../components/HeaderDashboard";

const DashboardLayout = () => {
    return (
        <section className="dashboard">
            <HeaderDashboard />

            <div className="grid-container">
                <DashSidebarLeft />

                {/* CENTER CONTENT CHANGES HERE */}
                <Outlet />

                <DashSidebarRight />
            </div>
        </section>
    );
};

export default DashboardLayout;
