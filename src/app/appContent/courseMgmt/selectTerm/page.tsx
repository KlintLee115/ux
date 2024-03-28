import Link from "next/link"

const seasons = ['winter', 'summer', 'fall'] as const
const years = [2024, 2025, 2026] as const

function TermComponent({ text }: { text: string }) {
    return <Link href={"/appContent/courseMgmt/selectCourse"}><div className="bg-white py-2 border-y pl-4"><p className="text-sm">{text}</p></div></Link>
}

export default function Page() {
    return (
        <div>
            <div className="text-center mx-auto text-white">
                <h1 className="bg-black text-5xl font-bold ">
                    COURSE MANAGEMENT
                </h1>
            </div>
            <div className="bg-gray-400 pt-7 px-4 h-[70vh]">
                <div>
                    <h3 className="text-2xl font-semibold tracking-wide bg-black text-white px-4 py-1">
                        Select a term
                    </h3>

                    {seasons.map(season => (
                        years.map(year => {
                            if (!(season === "winter" && year === 2024)) {
                                return <TermComponent text={`${season.toUpperCase()}  ${year.toString()}`} />
                            }
                            return null
                        })
                    ))}
                </div>
                <div className="text-center mx-auto mt-5">
                    <div className="flex gap-2 w-1/5 mx-auto">
                        <StyledButton>
                            <Link href={"/schedule"}>
                                <button className="text-sm">
                                    View Registration Information
                                </button>
                            </Link>
                        </StyledButton>
                        <StyledButton>
                            <button className="font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">Back</button>
                        </StyledButton>
                    </div>

                    <StyledButton style={"w-1/5 mt-3"}>
                        <Link href={""}><button className="font-bold py-1 text-lg">Submit</button></Link>
                    </StyledButton>
                </div>
            </div>

        </div>
    )
}

function StyledButton({ children, style }: { children: JSX.Element, style?: string }) {
    return <div className={`relative rounded-md mx-auto bg-gray-700 text-white ${style ? style : "w-1/2"}`}>
        {children}
    </div>
}