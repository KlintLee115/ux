"use client"

import { useState, useEffect } from "react";

export class Notifications {
    static NotificationQueue: Notification[] = []

    static updateNotificationQueue: (() => void) | undefined
}

export enum ActionType {
    ADD, REMOVE
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
            notificationQueue.map((_, idx) => <h2 className="p-5 bg-green-500 rounded-md text-lg font-semibold" key={idx}>Saved!</h2>)
        }
    </div>
}