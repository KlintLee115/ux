"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import image from '../../../public/sait.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import Overlay from "@/components/HelpNDocumentation/Overlay";
import { useCookies } from "react-cookie"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [cookies] = useCookies(['overlayOn']);
    const [overlayOn, setIsOverlayOn] = useState(cookies.overlayOn)

    return (
        <>
            <div className={`${overlayOn ? "block" : "hidden"} p-5 z-20 absolute h-[70vh] w-[60vw] top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white shadow-2xl shadow-black`}>
                <Overlay setIsOverlayOn={setIsOverlayOn} />
            </div>
            <div className={`${overlayOn && "blur-sm relative z-10"}`}>
                <header className="flex justify-between pb-4 border-white border-b-2 mb-9 items-center">
                    <div className="flex items-center gap-3">
                        <Link href={"/appContent/academics"}><Image src={image} alt="sait logo" className="w-min cursor-pointer" width={40} height={40} /></Link>
                        <h3 className="text-3xl text-white">EduNexus</h3>
                    </div>
                    <NavBar setIsOverlayOn={setIsOverlayOn} />
                </header>
                <div className={`${overlayOn && "blur-md relative z-10"}`} onClick={() => setIsOverlayOn(false)}>
                    {children}
                </div>
            </div>
        </>
    );
}
