"use client"

import { useState, useEffect } from "react";

export class Notifications {
    static NotificationQueue: Notification[] = []

    static updateNotificationQueue: (() => void) | undefined
}

export enum ActionType {
    ADD, ERROR, ERROR_REMINDER
}

type Notification = {
    timeout?: NodeJS.Timeout;
    action: ActionType
}

export default () => {

    const [notificationQueue, setNotificationQueue] = useState(Notifications.NotificationQueue);

    useEffect(() => {
        Notifications.updateNotificationQueue = () => {

            setNotificationQueue(Notifications.NotificationQueue)

            setNotificationQueue(() => {

                const newQueue = [...Notifications.NotificationQueue].map((notification) => {
                    if (!notification.timeout) {
                        notification.timeout = setTimeout(() => {
                            setNotificationQueue(prevQueue =>
                                prevQueue.filter((item) => item !== notification)
                            )
                            Notifications.NotificationQueue.shift()
                        }, 1500);
                    }
                    return notification
                })

                return newQueue;
            });
        };

        return () => {
            Notifications.updateNotificationQueue = undefined
        }

    }, []);

    return <div className="fixed top-18 right-5 z-20 flex flex-col gap-4">
        {
            notificationQueue.map((notification, idx) => <h2 className={`p-5 rounded-md text-lg font-semibold
            ${notification.action === ActionType.ADD ? "bg-green-500 " : "bg-red-500"}`}
                key={idx}>{
                    notification.action === ActionType.ADD ? "Saved!" :
                        notification.action === ActionType.ERROR ? "Invalid id & password combination" :
                            "Input must be a number bigger than 0"
                }</h2>)
        }
    </div>
}