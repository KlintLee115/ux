"use client"

import Image from "next/image"
import image from "../../../public/sait.png"
import { useCookies } from "react-cookie";

export default () => {

    const [cookies, setCookie] = useCookies(['firstTimer']);

    return <div className="text-white">
        <div className="flex items-center gap-3 cursor-pointer">
            <Image src={image} alt="sait logo" className="w-min cursor-pointer" width={40} height={40} />
            <h3 className="text-3xl text-white">EduNexus</h3>
        </div>
        <div className="text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 fixed flex flex-col gap-9">
            <h4 className="text-4xl mb-10 -mt-16">Welcome to EduNexus!</h4>
            <h4>Are you a new student? We recommend checking out the SAIT's official webpage for new students by clicking <a
                className="border-b-[3px] border-white"
                onClick={() => setCookie("firstTimer", false)}
                href="https://www.sait.ca/student-life/new-students/sait-start">here</a>.</h4>
            <h4>Otherwise, click <a
                className="border-b-[3px] border-white"
                onClick={() => setCookie("firstTimer", false)}
                href="/appContent/academics">here</a> to proceed to the main page.</h4>
        </div>
    </div>
}