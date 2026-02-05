import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


import { IoBarChartSharp, IoChatboxEllipses } from "react-icons/io5";
import { MdDashboardCustomize, MdOutlineFeaturedVideo } from 'react-icons/md';
import { BiSolidReport } from 'react-icons/bi';
import { FaChartBar, FaDatabase, FaGlobe, FaUsers } from 'react-icons/fa6';
import { LuFileUser } from 'react-icons/lu';
import { GoOrganization } from 'react-icons/go';
import { SiAwsorganizations } from 'react-icons/si';
import { AiFillSound } from 'react-icons/ai';


const DashSidebarLeft = () => {
    // const [activeItem, setActiveItem] = useState(null);

    const basic = [
        { icon: <IoChatboxEllipses />, text: "Chat", path: "/dashboard/chat" },
        { icon: <MdDashboardCustomize />, text: "Dashboard", path: "/dashboard/overview" },
        { icon: <IoBarChartSharp />, text: "Charts", path: "/dashboard/charts" },
        { icon: <BiSolidReport />, text: "Report", path: "/dashboard/report" },
        { icon: <FaDatabase />, text: "Data", path: "/dashboard/data" },
    ];


    const favorites = [
        { icon: <FaGlobe />, text: "Website" },
        { icon: <FaChartBar />, text: "KPIs" },
        { icon: <MdOutlineFeaturedVideo />, text: "Feature usage" },
        { icon: <FaUsers />, text: "Users - All" },
        { icon: <LuFileUser />, text: "User - Details" },
        { icon: <GoOrganization />, text: "Oraganization - Details" },
        { icon: <SiAwsorganizations />, text: "Oraganization - All" },
        { icon: <AiFillSound />, text: "Marketing & Growth" },
    ]

    return (
        <aside className='left_sidebar'>
            <div className="card h-100">
                <div className="card-body">
                    <div>
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>
                    <ul className="p-0 mt-3">
                        {basic.map((item, i) => (
                            <li key={i}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `cursor-pointer sidebar-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    {item.icon}&nbsp;{item.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <hr />
                    <div>
                        <h6>FAVORITES</h6>
                    </div>
                    <ul className='p-0'>
                        {favorites.map((item, i) => (
                            <li key={i}>
                                <a href="">{item.icon}&nbsp;{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default DashSidebarLeft
