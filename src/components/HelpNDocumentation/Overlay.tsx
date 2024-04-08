import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

export default ({ setIsOverlayOn }: { setIsOverlayOn: Dispatch<SetStateAction<boolean>> }) => {


    function TitleText({ title, text, href }: { title: string, text: string, href: string }) {
        return <li>
            <Link onClick={() => setIsOverlayOn(false)} href={href} className="text-2xl"><h2>{title + " page"}</h2></Link>
            <h4 className="text-lg">{text}</h4>
        </li>
    }
    return <>
        <div className="flex text-5xl justify-between">
            <h1 className="border-black border-b-4 inline">About & Pages Directory</h1>
            <h3 className="cursor-pointer" onClick={() => setIsOverlayOn(false)}>X</h3>
        </div>
        <div className="mt-8">
            <h1 className="text-4xl">About</h1>
            <h4 className="text-lg">EduNexus is not meant to replace SAIT's services, but to help stakeholders in navigating and finding
                features of SAIT's platforms easily. How? By consolidating the core features into one platform, and redirect users to the corresponding SAIT's official pages
                for more information.</h4>
        </div>

        <div className="mt-8">
            <h1 className="text-4xl">Pages Directory</h1>

            <ul className="flex flex-col text-2xl gap-8 overflow-y-auto list-disc">
                <TitleText title="Academics" href="/appContent/academics"
                    text="Check your academics related information such as GPA and courses progression. 
                On each component with white background ( Card ), click on Learn more to get more detailed information." />
                <TitleText title="Non Academics" href="/appContent/nonAcademics" text="Check your non academics related information such as financial, which is about the amount you have paid and due for the enrolled program. On each component with white background ( Card ), click on Learn more to get more detailed information. " />
                <TitleText title="Calendar" href="/appContent/calendar" text="Check your calendar for quizzes, assignments, events, deadlines and more. Features include settign reminders and adding new items." />
                <TitleText title="Just Arrived at SAIT" href="https://www.sait.ca/student-life/new-students/sait-start" text="Redirect to SAIT's website regarding information and to-dos for new SAIT students." />
                <TitleText href="/appContent/settings" title="Settings" text="Set one's preferred name, email, notification settings etc." />
                <TitleText title="Logout" href="/" text="Log out of the current account." />
            </ul>
        </div>
    </>
}
