"use client"

import { Card } from "@/components/CardComponent";
import AddedItemsNotification, { ActionType, Notifications } from "../../../components/settings/addedItemsNotification";
import { useMemo, useState } from "react";

const isValidEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


export default function Page() {

    const [email, setEmail] = useState('')

    const isValidEmail = useMemo(() => email !== "" && !email.match(isValidEmailRegex), [email])

    return (
        <Card title="">
            <div className="w-2/3 mx-auto">
                <AddedItemsNotification />
                <div className="flex justify-evenly">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h5>Name</h5>

                            <input className="border border-black" />
                        </div>
                        <div>

                            <h5>Age</h5>


                            <input className="border border-black" type="number" />
                        </div>

                        <div>

                            <div className="flex justify-between">
                                <label>Email</label>
                                <h5 className="inline text-red-800 font-extrabold">{
                                    isValidEmail && "Invalid"
                                }</h5>
                            </div>
                            <input className="border block border-black" type="email" onChange={event => setEmail(event.target.value)} />
                        </div>

                        <div>

                            <h5>Phone Number</h5>

                            <input className="border border-black" type="number" />
                        </div>

                    </div>
                    <div>
                        <div>
                            <h5>Remind me to pay debt every</h5>
                            <div className="flex gap-8">
                                <div className="flex gap-2">
                                    <label htmlFor="">week</label>
                                    <input type="checkbox" />
                                </div>
                                <div className="flex gap-2">

                                    <label htmlFor="">2 weeks</label>
                                    <input type="checkbox" />
                                </div>
                                <div className="flex gap-2">

                                    <label htmlFor="">month</label>
                                    <input type="checkbox" />
                                </div>
                            </div>
                            <div className="mt-10">
                                <h5>Remind me of my assignments every</h5>
                                <div className="flex gap-8">
                                    <div className="flex gap-2">
                                        <label htmlFor="">week</label>
                                        <input type="checkbox" />
                                    </div>
                                    <div className="flex gap-2">

                                        <label htmlFor="">2 weeks</label>
                                        <input type="checkbox" />
                                    </div>
                                    <div className="flex gap-2">

                                        <label htmlFor="">month</label>
                                        <input type="checkbox" />
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