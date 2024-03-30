import FinancialMgmt from "@/components/nonAcademics/financial-mgmt";
import { Card } from "@/components/CardComponent";

const GYM_TIMES: string[] = [] as const
const GYM_OCCUPANCE_TIMEBASED: string[] = [] as const

enum GYM_OCCUPANCE {
    OCCUPIED = "Occupied",
    FREE = "Free"
}

for (let i = 8; i < 23; i++) {

    // gym times
    const beginTime = `${i < 10 ? "0" + i : i}:00`
    const endTime = `${i + 1 < 10 ? "0" + (i + 1) : i + 1}:00`

    GYM_TIMES.push(`${beginTime} - ${endTime}`)

    // gym occupance
    GYM_OCCUPANCE_TIMEBASED.push(GYM_OCCUPANCE.OCCUPIED)
}

GYM_OCCUPANCE_TIMEBASED[2] = GYM_OCCUPANCE.FREE
GYM_OCCUPANCE_TIMEBASED[5] = GYM_OCCUPANCE.FREE
GYM_OCCUPANCE_TIMEBASED[6] = GYM_OCCUPANCE.FREE
GYM_OCCUPANCE_TIMEBASED[7] = GYM_OCCUPANCE.FREE

export default function Home() {


    return (
        <div>
            <Card title="Announcements">
                <p className="text-2xl">
                    SAIT partnered with OceanWave to bring next gen audio making
                    software.
                </p>
            </Card>
            <div className="grid grid-cols-8 mt-6 gap-4 justify-center grid-rows-4 h-[90vh]">
                <div className="col-span-2 row-end-3 col-start-1 row-start-1">
                    <Card title="Financial" link='https://www.mysait.ca/mystudents/Pages/default.aspx' contFromCurrDir={false}>
                        <FinancialMgmt />
                    </Card>
                </div>
                <div className="col-span-2 row-start-1 col-start-3 row-end-1">
                    <Card title="Library meeting rooms" link="https://sait.libcal.com/reserve/studyrooms" contFromCurrDir={false}>
                        <div className="text-base flex flex-col gap-2 items-center">
                            <p>Monday: 2 rooms available</p>
                            <p>Tuesday: 5 rooms available</p>
                            <p>Wednesday: 7 rooms available</p>
                            <p>Thursday: 10 rooms available</p>
                            <p>Friday: 7 rooms available</p>
                            <p>Saturday: 7 rooms available</p>
                            <p>Sunday: 7 rooms available</p>
                        </div>
                    </Card>
                </div>

                <div className="row-start-1 col-start-7 col-span-2 row-span-1">
                    <Card title="Campus events" link="/campusEvents/">
                        <div className="text-base">
                            <div className="flex justify-between">
                                <p className="w-3/5 line-clamp-1">Industry Night by SAIT student coding club</p>
                                <p>( 1st April 2024 )</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="w-3/5 line-clamp-1">SAIT trojan basketball tournament final match</p>
                                <p className="line-clamp-1">( 25th April 2024 )</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="row-span-1 row-start-2 col-start-7 col-span-2">
                    <Card title="Deadlines" link="https://www.sait.ca/student-life/important-dates" contFromCurrDir={false}>
                        <div className="text-base">
                            <p>Tuition payment ( 1st April 2024 )</p>
                            <p>Courses registration ( 25th March 2024 )</p>
                        </div>
                    </Card>
                </div>
                <div className="col-span-2 col-start-7 row-start-3 row-span-1">
                    <Card title="Housing information" link="efef" contFromCurrDir={false}>
                        <></>
                    </Card>
                </div>
                <div className="col-start-5 col-span-2 row-start-1">
                    <Card title="SAIT Gym Occupance" link="blabla" contFromCurrDir={false}>
                        <div>
                            <p className="text-center text-lg font-semibold">28th April 2024</p>
                            <div className="flex justify-center gap-7 mt-3">
                                <div className="flex flex-col gap-2">
                                    {
                                        GYM_TIMES.map(time => <p className="font-semibold">{time}</p>)
                                    }
                                </div>
                                <div className="flex flex-col gap-2">
                                    {
                                        GYM_OCCUPANCE_TIMEBASED.map(status => <p className={`font-extrabold text-base ${status === GYM_OCCUPANCE.OCCUPIED ? "text-red-600" : "text-green-600"}`}>{status}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/*  

                <div className="">
                    <Card title="SAIT Book Store" link="https://www.bkstr.com/saitstore/home" contFromCurrDir={false}>
                        <></>
                    </Card>
                </div>
               */}
            </div>
        </div >
    );
}
