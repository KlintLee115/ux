"use client"

import Image from 'next/image'
import image from "../../public/sait.png"
import AddedItemsNotification, { ActionType, Notifications } from '@/components/settings/addedItemsNotification'
import { HTMLInputTypeAttribute, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

export default function Page() {

    const [id, setId] = useState<number>(NaN)
    const [pwd, setPwd] = useState<string>('')
    const [type, setType] = useState<HTMLInputTypeAttribute>('password');
    const [icon, setIcon] = useState(eyeOff);

    const login = () => {
        if (id === 1234 && pwd === "password") {
            router.push('/appContent/academics');
        }
        else {
            Notifications.NotificationQueue.push({
                action: ActionType.ERROR,
            })
            Notifications.updateNotificationQueue && Notifications.updateNotificationQueue();
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            login();
        }
    };

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const router = useRouter()

    return <div>
        <AddedItemsNotification />
        <Image src={image} alt="sait logo" className="w-min cursor-pointer" width={40} height={40} />
        <div className="relative border-2 w-3/5 mx-auto mt-16 border-white py-14 text-center">

            <input placeholder="Please enter your student ID"
                onKeyDown={handleKeyPress}
                onChange={event => setId(event.target.valueAsNumber)}
                className="p-2 outline outline-2 outline-white placeholder-black w-72" type="number" />

            <div className="w-72 mx-auto mt-16  bg-white p-2">
                <input
                    type={type}
                    name="password"
                    className='placeholder-black outline-none'
                    placeholder="Password"
                    value={pwd}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setPwd(e.target.value)}
                    autoComplete="current-password"
                />
                <Icon className="text-black" onClick={handleToggle} icon={icon} size={25} />
            </div>

            <button className="block w-fit mx-auto mt-12 border-white text-white font-semibold border-2 py-4 px-8" onClick={login}>LOGIN</button>
        </div>
    </div>
}