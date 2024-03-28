"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    text: string;
    href: string;
    targetBlank?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ text, href, targetBlank = false }) => {

    const pathname = usePathname()

    return (
        <Link className="cursor-pointer relative" href={href}>
            <p className={
                `text-xl ${href !== "/" && pathname.replace(" ", "").toLowerCase().includes(href.toLowerCase())
                    ? "border-b-4 border-black" :
                    "after:w-0 after:transition-all after:duration-200 after:border-b-4 after:border-black after:absolute after:bottom-2 after:hover:w-full after:h-1 after:left-0 after:content-['']"
                }`}>{text}</p>
        </Link>
    );
}

export default function NavBar() {
    return <nav className="flex justify-between text-4xl gap-14">
        <NavLink href="/appContent/academics" text="Academics" />
        <NavLink href="/appContent/nonAcademics" text="Non Academics" />
        <NavLink href="/appContent/settings" text="Settings" />
        <NavLink href="https://www.sait.ca/student-life/new-students/sait-start" text="Just arrived at SAIT" />
        <NavLink href="/" text="Logout" />

    </nav>
}