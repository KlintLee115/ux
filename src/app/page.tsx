import Image from 'next/image'
import image from "../../public/sait.png"
import Link from "next/link"

export default function Page() {
    return <>

        <Image src={image} alt="sait logo" className="w-min cursor-pointer" width={40} height={40} />        <div className="relative border-2 w-3/5 mx-auto mt-16 border-white py-14 text-center">
            <div className="w-fit mx-auto">
                <p className="text-left mb-2">Student ID</p>
                <input placeholder="Please enter your student ID" className="p-2 outline outline-2 outline-white placeholder-black w-72" type="number" />
            </div>

            <div className="w-fit mx-auto mt-16">
                <p className="text-left mb-2">Password</p>
                <input placeholder="Please enter your password" className="p-2 outline outline-2 outline-white placeholder-black w-72" type="password" />
            </div>

            <Link href={"/appContent/academics"}>
                <button className="block w-fit mx-auto mt-12 border-white text-white font-semibold border-2 py-4 px-8">LOGIN</button>
            </Link>
        </div>
    </>
}