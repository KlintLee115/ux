"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { TimePickerInput } from "@/lib/time-picker-input"

export default function AddItemPopUp({ setGridsItem, isPoppedUp, setIsPoppedUp }: { setGridsItem: React.Dispatch<React.SetStateAction<Map<Date, string[]>>>, isPoppedUp: boolean, setIsPoppedUp: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [date, setDate] = useState<Date | undefined>()
    const [calenderOpen, setIsCalendarOpen] = useState(false)
    const [event, setEvent] = useState<string | undefined>()

    return (
        <div className={`${isPoppedUp ? "scale-100" : 'scale-0'} transition-all duration-300 bg-white border border-black text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto p-5 px-20 rounded-lg`}>
            <button className="absolute top-3 w-min text-3xl mb-7 right-8" onClick={() => setIsPoppedUp(false)}>X</button>
            <div className="mt-12 items-center">
                <label htmlFor="" className="mr-4">Pick a date: </label>
                <RequiredError display={!date} />
            </div>
            <Popover open={calenderOpen}>
                <PopoverTrigger>
                    <Button
                        onClick={() => setIsCalendarOpen(!calenderOpen)}
                        variant={"outline"}
                        className={cn(
                            "justify-start text-left font-normal w-min",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date and time</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pb-3">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={date => {
                            if (date) {
                                setDate(date)
                                setIsCalendarOpen(false)
                            }
                        }
                        }
                        initialFocus
                    />
                    <div className="flex gap-1 justify-center items-center">
                        <TimePickerInput date={date} setDate={setDate} picker="hours" />
                        <p>:</p>
                        <TimePickerInput date={date} setDate={setDate} picker="minutes" />
                    </div>
                </PopoverContent>

            </Popover>

            <div className="mt-12 items-center">
                <label htmlFor="" className="mr-4">Enter the event: </label>
                <RequiredError display={!event} />
            </div>
            <input className="border border-black w-[150px]" onChange={event => setEvent(event.target.value)} />
            <button type="submit" className={`bg-black text-white px-3 py-2 rounded-lg block mx-auto mt-8 ${date && event ? "bg-green-500" : "bg-red-600"}`} disabled={!event || !date}
                onClick={() => {


                    if (event && date) {

                        setGridsItem(items => {
                            const newItems = new Map<Date, string[]>()

                            items.forEach((value, key) => newItems.set(key, [...value]));

                            const itemsAtdate = newItems.get(date) ?? []
                            itemsAtdate.push(event)
                            newItems.set(date, itemsAtdate)

                            return newItems
                        })

                        setIsPoppedUp(false)
                    }
                }}
            >Add event</button>
        </div>
    )
}

const RequiredError = ({ display }: { display: boolean }) => <p className={`text-red-500 font-semibold ml-auto inline`}>{display ? "Required" : ""}</p>
