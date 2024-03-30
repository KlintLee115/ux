"use client"

import { Card } from "@/components/CardComponent";
import PopUp from "@/components/calender/PopUp";
import { WEEK, dayMappings } from "@/helpers/helper";
import { useEffect, useState } from "react";

const BoxSetting = "flex-grow basis-0 flex-shrink-0 border-black"

export default function Page() {

    const [isPoppedUp, setIsPoppedUp] = useState(false)
    const [grids, setGrids] = useState<JSX.Element[][]>([])

    const [gridItem, setGridItem] = useState<Map<number, string[]>>(new Map([
        [11, ["CPRG 250 Assignment 1", "CPSY 200 Assignment 2"]],
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
        <Card title="">
            <div className="text-black relative w-[calc(100%-5vw)] mx-auto">
                <div className={`${isPoppedUp ? "blur-lg" : ""}`} onClick={() => setIsPoppedUp(false)}>
                    {grids.map(row => <div className="flex justify-center">{row}</div>)}
                </div>
                <button className={`text-white absolute bottom-0 right-0 bg-black p-5  rounded-xl font-bold ${isPoppedUp ? "blur-lg" : ""}`} onClick={() => setIsPoppedUp(true)}>Add item</button>
                <PopUp setGridsItem={setGridItem} isPoppedUp={isPoppedUp} setIsPoppedUp={setIsPoppedUp} />

            </div>
        </Card>
    )
}