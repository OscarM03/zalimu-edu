import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
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
import Image from "next/image";

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

const MobileNav: React.FC = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="transition-all duration-300 ease-in-out">
                    <FaBars className="w-5 h-5" />
                </button>
            </SheetTrigger>
            <SheetContent className="bg-gray-50 w-full max-w-[300px] h-screen data-[state=open]:sheet-open data-[state=closed]:sheet-closed">
                <SheetHeader>
                    <SheetTitle className="flex items-center justify-center">
                        <Image
                            src="/assets/images/logo.png"
                            alt="logo"
                            width={150}
                            height={150}
                            className="object-cover"
                        />
                    </SheetTitle>
                </SheetHeader>
                <nav className="relative flex-1 overflow-y-auto remove-scrollbar">
                    <ul className="flex flex-col gap-2 mt-4">
                        {navItems.map(({ label, icon: Icon }, i) => (
                            <li
                                key={i}
                                className={`flex items-center gap-2 hover:bg-primary text-gray-600 hover:text-white cursor-pointer py-2 px-1 mx-2 rounded-md transition duration-200 ease-in-out`}
                            >
                                <Icon size={24} className="" />
                                <h2 className={`text-lg font-medium `}>
                                    {label}
                                </h2>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
