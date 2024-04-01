"use client"

import NetworkDiagram from "@/components/academics/courses-progression-network";
import CourseGpaChart from "@/components/academics/couses-gpa-chart";
import { Card } from "@/components/CardComponent";

export default function Home() {

    return (
        <div>
            <Card title="Announcements">
                <p className="text-2xl">
                    SAIT partnered with OceanWave to bring next gen audio making
                    software.
                </p>
            </Card>

            <div className="grid grid-cols-5 mt-6 grid-rows-1 gap-6 justify-center items-start">

                <div className="col-span-2 col-start-1">
                    <Card title="Courses and GPA">
                        <>
                            <div className="flex flex-wrap justify-evenly mb-9">
                                <CoursesGpaListing course="CPRG250" gpa={"3.6"} key={"CPRG250"} color="green" />
                                <CoursesGpaListing course="CPRG203" gpa={"3.7"} key={"CPRG203"} color="orange" />
                                <CoursesGpaListing course="CPSY300" gpa={"3.0"} key={"CPSY300"} color="white" />
                                <CoursesGpaListing course="PHIL200" gpa={"3.5"} key={"PHIL200"} color="blue" />
                                <CoursesGpaListing course="ABCD123" gpa={"3.2"} key={"ABCD123"} color="yellow" />

                            </div>
                            <CourseGpaChart />
                        </>
                    </Card>
                </div>
                <div className="col-span-3 col-start-3">
                    <Card title="Courses Progression" contFromCurrDir={false} link="https://www.sait.ca/programs-and-courses/diplomas/software-development#courses">
                        <NetworkDiagram />
                    </Card>
                </div>
            </div>
        </div >
    );
}

function CoursesGpaListing({ course, gpa, color }: { course: string, gpa: string, color: string }) {
    return <div className="text-center" style={{ color: `${color}`, fontWeight: "bold" }}>
        <p>{course}</p>
        <p>{gpa}</p>
    </div>
}

