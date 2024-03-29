"use client"

import { Card } from "@/components/CardComponent";
import AddedItemsNotification, { ActionType, Notifications } from "../../../components/settings/addedItemsNotification";

export default function Page() {

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

                            <h5>Email</h5>
                            <input className="border border-black" type="email" />
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
                <button className="block mx-auto mt-16 px-3 py-2 rounded-xl bg-black text-white" onClick={() => {
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