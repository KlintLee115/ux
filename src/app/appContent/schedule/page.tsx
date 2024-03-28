"use client"

import { WEEK, times, useCurrCourses } from "@/helpers/helper"



export default function Page() {

    const elements: JSX.Element[] = []
    const { CurrCourses } = useCurrCourses()

    for (let i = 0; i < 192; i++) {
        if (i === 0) {
            elements.push(<GridElement key={i}><div>Time</div></GridElement>)
        }
        else if (i < 8) {
            elements.push(<GridElement key={i}><div>{WEEK[i - 1]}</div></GridElement>)
        }
        else if (i % 8 === 0) {
            const startTime = `${(i / 8) < 10 ? `0${i / 8}` : i / 8}:00`
            const endTime = `${(i / 8) < 10 ? `0${(i / 8) + 1}` : (i / 8) + 1}:00`

            elements.push(<GridElement key={i}><div className="text-lg">{startTime} - {endTime}</div></GridElement>)
        }
        else {
            elements.push(<GridElement key={i}><div></div></GridElement>)
        }
    }

    Object.values(CurrCourses).forEach(object => {

        const { course, daySlot, timeSlot } = object

        const location = (times.indexOf(timeSlot) * 8) + 1 + WEEK.indexOf(daySlot)

        elements[location] = <GridElement key={location}>
            <div>
                {course}
            </div>
        </GridElement>
    })

    return <div className="grid grid-cols-8">

        {
            elements
        }

    </div>
}

function GridElement({ children }: { children: JSX.Element }) {
    return <div className="border border-black h-16 flex justify-center items-center text-2xl">{children}</div>
}

