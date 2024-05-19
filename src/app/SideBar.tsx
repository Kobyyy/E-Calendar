'use client'
import { CiHome, CiUser, CiStickyNote, CiSettings } from "react-icons/ci";
import Link from 'next/link';

const SideBar = () => {
    return (
        <div className="fixed -top-12
         left-0 w-screen h-16 m-0 flex flex-row bg-gray-900 text-white shadow-lg hover:translate-y-12 ease-linear duration-300">
            <SideBarIcon icon={<CiHome size="28" />} refer="" />
            <SideBarIcon icon={<CiStickyNote size="28" />} refer="dashboard" />
            <SideBarIcon icon={<CiUser size="28" />} refer="user" />
            <SideBarIcon icon={<CiSettings size="28" />} refer="settings" />
        </div>
    );
};

const SideBarIcon = ({ icon, refer }: { icon: React.ReactNode; refer: string }) => (
    <div className="sidebar-icon">
        <Link href={`./${refer}`}>
            {icon}
        </Link>
    </div>
);

export default SideBar;
