"use client"

import * as React from "react"
import { Notifications, ActionType } from "../settings/addedItemsNotification";
export default function SetReminderPopUp({ isPoppedUp, setIsPoppedUp }: { setGridsItem: React.Dispatch<React.SetStateAction<Map<Date, string[]>>>, isPoppedUp: boolean, setIsPoppedUp: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [inputNum, setInputNum] = React.useState(NaN)

    return (
        <div className={`${isPoppedUp ? "scale-100" : 'scale-0'} transition-all duration-300 bg-white text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto p-5 rounded-lg`}>
            <button className="ml-auto w-fit text-3xl mb-7 block" onClick={() => setIsPoppedUp(false)}>X</button>
            <h3 className="my-6 items-center mr-4">Remind me this long in advance </h3>
            <input type="number" onChange={event => setInputNum(event.target.valueAsNumber)} className="border border-black w-32" min={1} />
            <select>
                <option value="">
                    minutes
                </option>
                <option value="">
                    hours
                </option><option value="">
                    days
                </option>
            </select>

            <button className=" mt-6 block mx-auto bg-black text-white rounded-md px-4 py-2 " onClick={() => {

                if (isNaN(inputNum)) {

                    Notifications.NotificationQueue.push({
                        action: ActionType.ERROR_REMINDER,
                    });
                }

                else {
                    Notifications.NotificationQueue.push({
                        action: ActionType.ADD,
                    });
                }

                Notifications.updateNotificationQueue &&
                    Notifications.updateNotificationQueue();
            }}>Save</button>
        </div>
    )
}