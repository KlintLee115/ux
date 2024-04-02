"use client"

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
] as const

const YEARS = [
    2024, 2025, 2026
] as const

import { Card } from "@/components/CardComponent";
import AddItemPopUp from "@/components/calender/AddItemPopUp";
import SetReminderPopUp from "@/components/calender/SetReminderPopUp";
import AddedItemsNotification from "@/components/settings/addedItemsNotification";
import { WEEK, dayMappings } from "@/helpers/helper";
import { useEffect, useState } from "react";

const BoxSetting = "flex-grow basis-0 flex-shrink-0 border-black"

const isDateMatch = (date1: Date, date2: Date) => date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()

export default function Page() {

    const [year, setYear] = useState<typeof YEARS[number]>(2024)
    const [month, setMonth] = useState<typeof MONTHS[number]>(MONTHS[new Date().getMonth()])

    const [isReminderPoppedUp, setIsReminderPoppedUp] = useState(false)
    const [isAddItemPoppedUp, setIsAddItemPoppedUp] = useState(false)

    const [grids, setGrids] = useState<JSX.Element[][]>([])

    const [gridItem, setGridItem] = useState<Map<Date, string[]>>(new Map([
        [new Date(2024, 3, 27, 11, 44), ["Tuition deadline 1", "SAIT trojan badminton tournament"]],
        [new Date(2024, 3, 27, 11, 33), ["Tuition deadline 2", "SAIT trojan volleyball tournament"]],
        [new Date(2024, 4, 28, 9, 34), ["CPRG 215 Assignment 1", "CPRG 215 Assignment 1"]],
        [new Date(2024, 5, 28, 7, 25), ["CPRG 215 Assignment 1", "CPRG 215 Assignment 1"]]
    ]))

    const gridItemHasDate = (selectedDate: Date) => Array.from(gridItem.keys()).some(datetime => isDateMatch(selectedDate, datetime))

    useEffect(() => {

        const newGrids: JSX.Element[][] = [];

        for (let i = 0; i < 6; i++) {
            const newRow: JSX.Element[] = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0) {
                    newRow.push(
                        <div key={`${i}-${j}`} className={`${BoxSetting} justify-center text-xl h-14 border flex items-center`}>
                            <p className="text-lg">{dayMappings[WEEK[j]]}</p>
                        </div>
                    );
                } else {
                    const num = i * 7 + j - 6;

                    const currBoxDate = new Date(year, MONTHS.indexOf(month), num)

                    if (num < 32) {
                        if (gridItemHasDate(currBoxDate)) {

                            const matchingKeysWithTime = Array.from(gridItem.keys()).filter(date => isDateMatch(date, currBoxDate)).sort((a, b) => a.getTime() - b.getTime());

                            newRow.push(
                                <div key={`${i}-${j}`} className={`${BoxSetting} border pb-5`}>
                                    <p className="text-xl ml-3 mt-3">{num}</p>

                                    {
                                        matchingKeysWithTime.map((keyTime, idx) => (
                                            <div className={` ${matchingKeysWithTime.length > 1 && idx < matchingKeysWithTime.length - 1 && "max-w-[80%] border-b border-black mb-2 pb-2"} mt-2 ml-3`}>
                                                <p className="text-blue-600 font-semibold">{keyTime.getHours()}:{keyTime.getMinutes()}</p>
                                                {gridItem.get(keyTime)?.map((item, index) => (
                                                    <p key={index} className="text-sm">{item}</p>
                                                ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            );
                        } else {
                            newRow.push(
                                <div key={`${i}-${j}`} className={`${BoxSetting} min-h-32 border`}>
                                    <p className="text-xl ml-3 mt-3">{num}</p>
                                </div>
                            );
                        }
                    }
                    else {
                        newRow.push(
                            <div key={`${i}-${j}`} className={`${BoxSetting} min-h-32 border-0`}>
                                <></>
                            </div>
                        );
                    }
                }
            }
            newGrids.push(newRow);
        }

        setGrids(newGrids);
    }, [gridItem, month, year]);


    return (
        <>
            <AddedItemsNotification />

            <Card title="">

                <div className="text-black relative w-[calc(100%-5vw)] mx-auto">
                    <div className="flex justify-center gap-4 mb-5">
                        <select defaultValue={month} onChange={event => setMonth(event.target.value as typeof MONTHS[number])}>
                            {
                                MONTHS.map(month => <option value={month}>{month}</option>)
                            }
                        </select>
                        <select defaultValue={year} onChange={event => setYear(parseInt(event.target.value) as typeof YEARS[number])}>
                            {
                                YEARS.map(year => <option value={year}>{year}</option>)
                            }
                        </select>
                    </div>
                    <div className={`${isAddItemPoppedUp || isReminderPoppedUp ? "blur-lg" : ""}`} onClick={() => {
                        setIsAddItemPoppedUp(false)
                        setIsReminderPoppedUp(false)
                    }
                    }>
                        {grids.map(row => <div className="flex justify-center">{row}</div>)}
                    </div>
                    <div className="absolute text-white bottom-0 right-0 flex gap-5">
                        <button className={` bg-black p-5  rounded-xl font-bold ${isAddItemPoppedUp || isReminderPoppedUp ? "blur-lg" : ""}`} onClick={() => setIsReminderPoppedUp(true)}>Set reminder</button>
                        <button className={` bg-black p-5  rounded-xl font-bold ${isAddItemPoppedUp || isReminderPoppedUp ? "blur-lg" : ""}`} onClick={() => setIsAddItemPoppedUp(true)}>Add item</button>
                    </div>
                    <AddItemPopUp setGridsItem={setGridItem} isPoppedUp={isAddItemPoppedUp} setIsPoppedUp={setIsAddItemPoppedUp} />
                    <SetReminderPopUp setGridsItem={setGridItem} isPoppedUp={isReminderPoppedUp} setIsPoppedUp={setIsReminderPoppedUp} />

                </div>
            </Card>
        </>
    )
}