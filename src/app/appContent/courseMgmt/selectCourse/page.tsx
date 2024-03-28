"use client"

import { COURSES } from "@/helpers/helper"
import Link from "next/link"
import { useState } from "react"


function TermComponent({ text }: { text: typeof COURSES[number] }) {
    return <Link href={`selectTime?course=${text}`}><div className="bg-white py-2 border-y pl-4 justify-between items-center flex">
        <p className="text-sm">{text}</p>
    </div></Link>
}

export default function Page() {

    const [inputText, setInputText] = useState<string>('')

    return (
        <div>
            <div className="text-center mx-auto text-white">
                <h1 className="bg-black text-5xl font-bold ">
                    COURSE MANAGEMENT
                </h1>
            </div>
            <div className="bg-gray-400 pt-7 px-4 min-h-[90vh] overflow-auto">
                <div className="overflow-auto h-[50vh]">
                    <h3 className="text-2xl font-semibold tracking-wide bg-black text-white px-4 py-1">
                        By Course ID
                    </h3>

                    <div className="relative">
                        <input onChange={input => setInputText(input.target.value)} placeholder="Search..." className="sticky top-0 w-full outline outline-1 outline-black placeholder-black px-5 py-2" />

                        <div className="h-[40vh]">
                            {COURSES.map(course => course.toLowerCase().includes(inputText.toLowerCase()) && <TermComponent key={course} text={course} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="text-center mx-auto mt-5">
                    <div className="flex gap-2 w-1/5 mx-auto">
                        <StyledButton>
                            <Link href={"/schedule"}>
                                <button className="text-sm">
                                    View Registration Information
                                </button>
                            </Link>
                        </StyledButton>
                        <StyledButton>
                            <button className="font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">Back</button>
                        </StyledButton>
                    </div>

                    <StyledButton style={"w-1/5 mt-3"}>
                        <Link href={"/appContent/schedule"}><button className="font-bold py-1 text-lg">Submit</button></Link>
                    </StyledButton>
                </div>
            </div>

        </div>
    )
}

function StyledButton({ children, style }: { children: JSX.Element, style?: string }) {
    return <div className={`relative rounded-md mx-auto bg-gray-700 text-white ${style ? style : "w-1/2"}`}>
        {children}
    </div>
}