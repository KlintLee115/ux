"use client"

import { Card } from "@/components/CardComponent";
import AddItemPopUp from "@/components/calender/AddItemPopUp";
import PopUp from "@/components/calender/AddItemPopUp";
import SetReminderPopUp from "@/components/calender/SetReminderPopUp";
import AddedItemsNotification from "@/components/settings/addedItemsNotification";
import { WEEK, dayMappings } from "@/helpers/helper";
import { useEffect, useState } from "react";

const BoxSetting = "flex-grow basis-0 flex-shrink-0 border-black"

export default function Page() {

    const [isReminderPoppedUp, setIsReminderPoppedUp] = useState(false)
    const [isAddItemPoppedUp, setIsAddItemPoppedUp] = useState(false)

    const [grids, setGrids] = useState<JSX.Element[][]>([])

    const [gridItem, setGridItem] = useState<Map<number, string[]>>(new Map([
        [11, ["Tuition deadline 1", "SAIT trojan badminton tournament"]],
        [19, ["CPRG 215 Assignment 1", "CPRG 215 Assignment 1", "CPRG 215 Assignment 1", "CPRG 215 Assignment 1"]]
    ]))

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
                    if (num < 32) {
                        if (gridItem.has(num)) {
                            newRow.push(
                                <div key={`${i}-${j}`} className={`${BoxSetting} min-h-32 border`}>
                                    <p className="text-xl ml-3 mt-3">{num}</p>
                                    {gridItem.get(num)?.map((item, index) => (
                                        <p key={index} className="text-base ml-3 mt-3">{item}</p>
                                    ))}
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
    }, [gridItem]);


    return (
        <>
            <AddedItemsNotification />

            <Card title="">

                <div className="text-black relative w-[calc(100%-5vw)] mx-auto">
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