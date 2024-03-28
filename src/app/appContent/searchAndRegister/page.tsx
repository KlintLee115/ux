import Link from "next/link";

export default function searchAndRegisterPage() {

    const seasons = ['WINTER', 'FALL', 'SUMMER'] as const
    const years = ['2024', '2025', '2026'] as const;

    return <div className="w-fit mx-auto mt-32">
        <button className="border border-black px-5 py-2 rounded-lg">Select Term</button>

        <div className="shadow-custom p-3">
            {seasons.map(season => (
                <div key={season}>
                    <ul>
                        {years.map(year => (
                            <Link href="/searchbycourseid" className="block my-3 hover:bg-gray-200 p-1" key={year + season}>{season} {year}</Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
}