import Image from "next/image";
import React from "react";
import {
    HiHome,
    HiOutlineChartBar,
    HiOutlineUserGroup,
    HiOutlineCog,
    HiOutlineBell,
    HiOutlineDocumentText,
    HiOutlineInbox,
    HiOutlineSupport,
    HiOutlineCalendar,
    HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

const navItems = [
    { label: "Home", icon: HiHome },
    { label: "Analytics", icon: HiOutlineChartBar },
    { label: "Users", icon: HiOutlineUserGroup },
    { label: "Settings", icon: HiOutlineCog },
    { label: "Notifications", icon: HiOutlineBell },
    { label: "Reports", icon: HiOutlineDocumentText },
    { label: "Inbox", icon: HiOutlineInbox },
    { label: "Support", icon: HiOutlineSupport },
    { label: "Calendar", icon: HiOutlineCalendar },
    { label: "Help", icon: HiOutlineQuestionMarkCircle },
];

interface NavbarProps {
    minimizeMenu: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ minimizeMenu }) => {
    return (
        <div className="flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
            <nav className="relative flex-1 overflow-y-auto remove-scrollbar">
                <ul className="flex flex-col gap-2 mt-4">
                    {navItems.map(({ label, icon: Icon }, i) => (
                        <li
                            key={i}
                            className={`flex items-center gap-2 hover:bg-primary text-gray-600 hover:text-white cursor-pointer py-2 px-1 ${minimizeMenu ? "mx-2 justify-center" : "mx-4"} rounded-md transition duration-200 ease-in-out`}
                        >
                            <Icon size={24} className="" />
                            <h2
                                className={`text-lg font-medium  ${
                                    minimizeMenu ? "hidden" : "block"
                                }`}
                            >
                                {label}
                            </h2>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={`h-16 bg-primary ${minimizeMenu ? "mx-2" : "mx-4"} px-1 rounded-md my-2 flex items-center gap-2`}>
                <Image
                    src="/assets/images/profile.png"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full bg-white p-1"
                />
                <div className={` ${minimizeMenu ? "hidden" : "block"} `}>
                    <h1 className="font-bold text-white">OscarM</h1>
                    <p className="font-bold text-xs text-gray-600">Teacher</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
