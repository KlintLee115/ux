import CourseMgmt from "@/components/academics/couses-gpa-chart";
import { Card } from "@/components/CardComponent";
import AssignmentsByCourses from "../../../components/academics/assignment";
import AssignmentsCalender from "../../../components/academics/assignmentsCalender";

export default function Home() {


    return (
        <div>
            <Card title="Announcements">
                <p className="text-2xl">
                    SAIT partnered with OceanWave to bring next gen audio making
                    software.
                </p>
            </Card>

            <div className="grid grid-cols-7 mt-6 grid-rows-5 gap-6 justify-center items-start">

                <div className="col-span-3 row-span-2 row-start-1 col-start-1">
                    <Card title="Courses and GPA">
                        <CourseMgmt />
                    </Card>
                </div>
                <div className="col-span-3 row-start-3 row-span-3 col-start-1">
                    <Card title="Assignments by Course" contFromCurrDir={false} link="https://learn.sait.ca/d2l/home">
                        <AssignmentsByCourses />
                    </Card>
                </div>

                <div className="col-span-4 row-span-5 col-start-4">
                    <Card title="Assignments and Quiz Calendar" link="https://learn.sait.ca/d2l/le/calendar/6605?ou=6605">
                        <AssignmentsCalender />
                    </Card>
                </div>

            </div>
        </div >
    );
}

