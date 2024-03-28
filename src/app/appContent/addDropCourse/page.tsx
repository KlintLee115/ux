"use client"

import { useCurrCourses } from "@/helpers/helper";
import Link from "next/link";

export default function DropCourse() {

    const { CurrCourses, setCurrCourses } = useCurrCourses()

    const handleDropCourse = (courseToRemove: string) => {
        const updatedCourses = CurrCourses.filter(course => course !== courseToRemove);
        setCurrCourses(updatedCourses);
    };

    return <div className="mx-auto w-72 mt-12">
        <h2 className="text-2xl mb-4">Drop a course</h2>

        {
            CurrCourses.length > 0 ?

                (CurrCourses.map(course => (
                    <div className="flex gap-8" key={course}>
                        <h4>{course}</h4>
                        <h4 className="text-red-500 font-bold cursor-pointer"
                            onClick={() => handleDropCourse(course)}>DROP</h4>
                    </div>
                ))
                )
                : <p>No course yet</p>
        }
    </div>
}