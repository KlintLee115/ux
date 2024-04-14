"use client"

import { Card } from "@/components/CardComponent";
import AddedItemsNotification, { ActionType, Notifications } from "../../../components/settings/addedItemsNotification";
import { useMemo, useState } from "react";

const isValidEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


export default function Page() {

    const [email, setEmail] = useState('abcd@edu.sait.ca')
    const [name, setName] = useState('Klint Lee')
    const [age, setAge] = useState(20)
    const [number, setNumber] = useState(123456789)
    const [debtWeek, setDebtWeek] = useState(false)
    const [debt2Weeks, setDebt2Weeks] = useState(false)
    const [debtMonth, setDebtMonth] = useState(true)
    const [assignmentWeek, setAssignmentWeek] = useState(true)
    const [assignment2Weeks, setAssignments2Weeks] = useState(false)
    const [assignmentMonth, setAssignmentMonth] = useState(false)
    const [reminderWs, setRemindWs] = useState(true)
    const [remindEmail, setRemindEmail] = useState(true)
    const [remindSms, setRemindSms] = useState(false)


    const isValidEmail = useMemo(() => email !== "" && !email.match(isValidEmailRegex), [email])

    return (
        <Card title="">
            <div className="w-2/3 mx-auto">
                <AddedItemsNotification />
                <div className="flex justify-evenly">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h5>Name</h5>

                            <input className="border border-black" defaultValue={name} onChange={event => setName(event.target.value)} />
                        </div>
                        <div>

                            <h5>Age</h5>


                            <input className="border border-black" type="number" defaultValue={age} onChange={event => setAge(event.target.valueAsNumber)} />
                        </div>

                        <div>

                            <div className="flex justify-between">
                                <label>Email</label>
                                <h5 className="inline text-red-800 font-extrabold">{
                                    isValidEmail && "Invalid"
                                }</h5>
                            </div>
                            <input className="border block border-black" type="email" defaultValue={email} onChange={event => setEmail(event.target.value)} />
                        </div>

                        <div>

                            <h5>Phone Number</h5>

                            <input className="border border-black" type="number" defaultValue={number} onChange={event => setNumber(event.target.valueAsNumber)} />
                        </div>

                    </div>
                    <div>
                        <div>
                            <h5>Remind me to pay debt every</h5>
                            <div className="flex gap-8">
                                <div className="flex gap-2">
                                    <label htmlFor="">week</label>
                                    <input type="checkbox" checked={debtWeek} onChange={event => setDebtWeek(event.target.checked)} />
                                </div>
                                <div className="flex gap-2">

                                    <label htmlFor="">2 weeks</label>
                                    <input type="checkbox" checked={debt2Weeks} onChange={event => setDebt2Weeks(event.target.checked)} />
                                </div>
                                <div className="flex gap-2">

                                    <label htmlFor="">month</label>
                                    <input type="checkbox" checked={debtMonth} onChange={event => setDebtMonth(event.target.checked)} />
                                </div>
                            </div>
                            <div className="mt-10">
                                <h5>Remind me of my assignments every</h5>
                                <div className="flex gap-8">
                                    <div className="flex gap-2">
                                        <label htmlFor="">week</label>
                                        <input type="checkbox" checked={assignmentWeek} onChange={event => setAssignmentWeek(event.target.checked)} />
                                    </div>
                                    <div className="flex gap-2">

                                        <label htmlFor="">2 weeks</label>
                                        <input type="checkbox" checked={assignment2Weeks} onChange={event => setAssignments2Weeks(event.target.checked)} />
                                    </div>
                                    <div className="flex gap-2">

                                        <label htmlFor="">month</label>
                                        <input type="checkbox" checked={assignmentMonth} onChange={event => setAssignmentMonth(event.target.checked)} />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h5>How would you like to be reminded?</h5>
                                    <div className="flex gap-8">
                                        <div className="flex gap-2">
                                            <label htmlFor="">WhatSapp</label>
                                            <input type="checkbox" checked={reminderWs} onChange={event => setRemindWs(event.target.checked)} />
                                        </div>
                                        <div className="flex gap-2">

                                            <label htmlFor="">Email</label>
                                            <input type="checkbox" checked={remindEmail} onChange={event => setRemindEmail(event.target.checked)} />
                                        </div>
                                        <div className="flex gap-2">

                                            <label htmlFor="">SMS</label>
                                            <input type="checkbox" checked={remindSms} onChange={event => setRemindSms(event.target.checked)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button disabled={isValidEmail}
                    className={`block mx-auto mt-16 px-3 py-2 rounded-xl  text-white ${isValidEmail ? "bg-red-500" : "bg-black"}`}
                    onClick={() => {
                        Notifications.NotificationQueue.push({
                            action: ActionType.ADD,
                        });

                        Notifications.updateNotificationQueue &&
                            Notifications.updateNotificationQueue();
                    }}>Save</button>
            </div>
        </Card>
    )

}