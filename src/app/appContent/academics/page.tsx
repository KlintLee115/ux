import CourseMgmt from "@/components/main/couses-gpa-chart";
import { Card } from "@/helpers/tsxHelper";
import AssignmentsByCourses from "./assignment";
import AssignmentsCalender from "./assignmentsCalender";

export default function Home() {


    return (
        <div className="min-h-[140vh]">
            <Card title="Announcements">
                <p className="text-2xl">
                    SAIT partnered with OceanWave to bring next gen audio making
                    software.
                </p>
            </Card>

            <div className="grid grid-cols-7 mt-6 grid-rows-2 gap-6 justify-center items-start h-[110vh] ">

                <div className="col-span-3 row-span-1 row-start-1 col-start-1">
                    <Card title="Courses and GPA">
                        <CourseMgmt />
                    </Card>
                </div>
                <div className="col-span-3 row-start-2 row-span-1 col-start-1">
                    <Card title="Assignments by Course" contFromCurrDir={false} link="https://learn.sait.ca/d2l/home">
                        <AssignmentsByCourses />
                    </Card>
                </div>

                <div className="col-span-4 row-span-3 col-start-4">
                    <Card title="Assignments and Quiz Calendar" link="https://learn.sait.ca/d2l/le/calendar/6605?ou=6605">
                        <AssignmentsCalender />
                    </Card>
                </div>

            </div>
        </div >
    );
}

