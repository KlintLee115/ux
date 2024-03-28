import Link from "next/link"

export default function Page() {
    return <div>

        <p className="text-2xl">SAIT</p>
        <div className="relative border-2 w-3/5 mx-auto mt-16 border-black py-14 text-center">
            <div className="w-fit mx-auto">
                <p className="text-left mb-2">Student ID</p>
                <input placeholder="Please enter your student ID" className="p-2 outline outline-2 outline-black w-72" type="number" />
            </div>

            <div className="w-fit mx-auto mt-16">
                <p className="text-left mb-2">Password</p>
                <input placeholder="Please enter your password" className="p-2 outline outline-2 outline-black w-72" type="password" />
            </div>

            <Link href={"/appContent/academics"}>
                <button className="block w-fit mx-auto mt-12 border-black border-2 py-4 px-8">LOGIN</button>
            </Link>
        </div>
    </div>
}