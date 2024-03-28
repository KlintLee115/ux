import Link from "next/link";

export default function CoursesPage() {
    return <div className="mx-auto w-72 mt-12">
        <h2 className="text-2xl">COURSE MANAGEMENT</h2>
        <div >
            <Link className="hover:bg-gray-300" href={"/addDropCourse"}>Change or drop courses</Link>

        </div>
        {/* <Link href={"/"}>View Registration Information</Link> */}
        <div>
            <Link className="hover:bg-gray-300" href={"/searchAndRegister"}>Search and Register for Courses</Link>
        </div>

    </div>
}