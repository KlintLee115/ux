"use client"

import { useCurrCourses } from "@/helpers/helper"
import { useMemo, useState } from "react"

const courses: string[] = ['CPSY200', 'CPSY205'] as const

export default function SearchAndRegisterPage() {

    const { CurrCourses, setCurrCourses } = useCurrCourses()
    const [inputText, setInputText] = useState<string>('')

    const filteredCourses = useMemo(() => courses.filter(course => course.toLowerCase().includes(inputText.toLowerCase())
    ), [inputText, courses]);

    const addCourse = (course: string) => {
        CurrCourses.push(course)
        setCurrCourses(CurrCourses)
    }

    return <div className="mx-auto mt-32 w-64">
        <h2 className="text-3xl">Add a course</h2>
        <div className="w-64 mt-4 border border-black">
            <input onChange={(event) => setInputText(event.target.value)} className="mx-auto text-center outline-none" placeholder="Search by Course ID"></input>
        </div>
        {
            filteredCourses.length > 0 ?
                <div className="mt-4 mx-auto py-4 w-64 shadow-md shadow-slate-950">
                    {
                        filteredCourses.map(course => (
                            <div className="flex justify-evenly">
                                <h3 className="w-auto text-center" key={course}>{course}</h3>
                                <h3 onClick={() => addCourse(course)} className="cursor-pointer text-green-500 font-bold">ADD</h3>
                            </div>
                        ))
                    }
                </div>
                :
                <p>No courses found</p>
        }
    </div>
}