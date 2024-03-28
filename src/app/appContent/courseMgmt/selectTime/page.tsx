"use client"

import { addToCurrCourses, COURSES, dayMappings, times, WEEK } from "@/helpers/helper"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

function TermComponent({ day, timeRange, course }: { day: typeof WEEK[number], timeRange: string, course: typeof COURSES[number] }) {


    return <div className="bg-white py-2 border-y pl-4 justify-between items-center flex">
        <p className="text-sm">{dayMappings[day as typeof WEEK[number]] + " " + timeRange}</p>
        <button className="shadow-sm shadow-black px-3 py-1 mr-5"
            onClick={() => addToCurrCourses({ course, daySlot: day as typeof WEEK[number], timeSlot: timeRange })}>Add</button>
    </div>
}

export default function Page() {
    const [inputText, setInputText] = useState<string>('')
    const searchParams = useSearchParams()

    const course = searchParams.get('course') as typeof COURSES[number]

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
                            {
                                WEEK.flatMap(day => (
                                    times.map(timeRange => {
                                        return (dayMappings[day as typeof WEEK[number]] + timeRange).toLowerCase().includes(inputText.toLowerCase()) && <TermComponent timeRange={timeRange} day={day} key={day + timeRange} course={course} />
                                    })
                                ))
                            }
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
                        <Link href={"submitCourses/"}><button className="font-bold py-1 text-lg">Submit</button></Link>
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