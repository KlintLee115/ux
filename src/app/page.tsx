"use client"

import Image from 'next/image'
import image from "../../public/sait.png"
import AddedItemsNotification, { ActionType, Notifications } from '@/components/settings/addedItemsNotification'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {

    const [id, setId] = useState<number>(NaN)
    const [pwd, setPwd] = useState<string>('')

    const router = useRouter()

    return <>
        <AddedItemsNotification />
        <Image src={image} alt="sait logo" className="w-min cursor-pointer" width={40} height={40} />
        <div className="relative border-2 w-3/5 mx-auto mt-16 border-white py-14 text-center">
            <div className="w-fit mx-auto">
                <p className="text-left mb-2">Student ID</p>
                <input placeholder="Please enter your student ID" onChange={event => setId(event.target.valueAsNumber)} className="p-2 outline outline-2 outline-white placeholder-black w-72" type="number" />
            </div>

            <div className="w-fit mx-auto mt-16">
                <p className="text-left mb-2">Password</p>
                <input placeholder="Please enter your password" onChange={event => setPwd(event.target.value)} className="p-2 outline outline-2 outline-white placeholder-black w-72" type="password" />
            </div>

            <button className="block w-fit mx-auto mt-12 border-white text-white font-semibold border-2 py-4 px-8" onClick={() => {

                if (id === 1234 && pwd === "password") {
                    router.push('/appContent/academics')
                    return
                }
                Notifications.NotificationQueue.push({
                    action: ActionType.ERROR,
                });

                Notifications.updateNotificationQueue &&
                    Notifications.updateNotificationQueue();
            }}>LOGIN</button>
        </div>
    </>
}