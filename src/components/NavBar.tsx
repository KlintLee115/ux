"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface NavLinkProps {
    text: string;
    href: string
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {

    const pathname = usePathname()

    return (
        <Link className="cursor-pointer relative text-white" href={href}>
            <p className={
                `text-base font-bold ${href !== "/" && pathname.replace(" ", "").toLowerCase().includes(href.toLowerCase())
                    ? "border-b-[3px] border-white" :
                    "after:w-0 after:transition-all after:duration-200 after:border-b-[3px] after:border-white after:absolute after:bottom-[3px] after:hover:w-full after:h-1 after:left-0 after:content-['']"
                }`}>{text}</p>
        </Link>
    );
}

export default function NavBar({ setIsOverlayOn }: { setIsOverlayOn: Dispatch<SetStateAction<boolean>> }) {
    return <nav className="flex justify-between items-center text-4xl gap-10">
        <NavLink href="/appContent/academics" text="Academics" />
        <NavLink href="/appContent/nonAcademics" text="Non Academics" />
        <NavLink href="/appContent/finances" text="Finances" />
        <NavLink href="/appContent/calendar" text="Calendar" />
        <NavLink href="https://www.sait.ca/student-life/new-students/sait-start" text="Just arrived at SAIT" />
        <NavLink href="/appContent/settings" text="Settings" />
        <NavLink href="/" text="Logout" />

        <h3 onClick={() => setIsOverlayOn(true)} className="cursor-pointer text-red-400 border-[3px] flex justify-center items-center border-red-400 rounded-full w-12 aspect-square">
            ?
        </h3>

    </nav>
}