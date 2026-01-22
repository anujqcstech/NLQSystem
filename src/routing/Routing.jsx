import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";


import Chat from "../components/dashComponents/Chat";
import DashOverview from "../components/dashComponents/DashOverview";
import Charts from "../components/dashComponents/Charts";
import Reports from "../components/dashComponents/Reports";
import Data from "../components/dashComponents/Data";
import DashboardLayout from "../layout/DashboardLayout";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />

                {/* DASHBOARD */}
                <Route path="/dashboard" element={<DashboardLayout />}>

                    {/* Default → Chat */}
                    <Route index element={<Navigate to="chat" replace />} />

                    <Route path="chat" element={<Chat />} />
                    <Route path="overview" element={<DashOverview />} />
                    <Route path="charts" element={<Charts />} />
                    <Route path="report" element={<Reports />} />
                    <Route path="data" element={<Data />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
