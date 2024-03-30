import CourseMgmt from "@/components/academics/couses-gpa-chart";
import { Card } from "@/components/CardComponent";
import AssignmentsByCourses from "../../../components/academics/assignment";

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
                        <CourseMgmt />
                    </Card>
                </div>
                <div className="col-span-3 col-start-3">
                    <Card title="Assignments by Course" contFromCurrDir={false} link="https://learn.sait.ca/d2l/home">
                        <AssignmentsByCourses />
                    </Card>
                </div>
            </div>
        </div >
    );
}

