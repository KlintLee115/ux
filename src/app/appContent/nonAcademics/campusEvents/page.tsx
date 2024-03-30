export default function Page() {
    return <div className="w-[70vw] mx-auto text-white">
        <h2 className="text-3xl font-semibold mb-3">Your enrolled clubs</h2>
        <div className="flex flex-col gap-8">
            <GridCard title="Sait Badminton Club">
                <div className="grid grid-cols-3 grid-rows-2">
                    <EventCard title="SaitSa Trojan Draft 1st round" gridSet="row-span-2 h-48" />
                    <EventCard title="SaitSa Trojan Draft 2nd round" gridSet="col-start-2 row-span-1" />
                    <EventCard title="SaitSa Trojan inner tournament" gridSet="row-span-1 row-start-2 col-start-2" />
                    <RightArrow />

                </div>
            </GridCard>
            <GridCard title="Sait Hockey Club">
                <div className="grid grid-cols-3 grid-rows-2">
                    <EventCard title="SaitSa Trojan Draft 1st round" gridSet="row-span-2 h-48" />
                    <EventCard title="SaitSa Trojan Draft 2nd round" gridSet="col-start-2 row-span-1" />
                    <EventCard title="SaitSa Trojan inner tournament" gridSet="row-span-1 row-start-2 col-start-2" />

                    <RightArrow />

                </div>
            </GridCard>
        </div>

        <h2 className="text-3xl font-semibold mt-11 mb-3">Public events</h2>

        <div className="flex flex-col gap-8 w-[70vw] mx-auto">
            <GridCard title="Sait Volunteer Club">
                <div className="grid grid-cols-3 grid-rows-2">
                    <EventCard title="Food donation" gridSet="row-span-2 h-48" />
                    <EventCard title="Winter semester welcoming" gridSet="col-start-2 row-span-1" />
                    <EventCard title="Food preparation for homeless" gridSet="row-span-1 row-start-2 col-start-2" />

                    <RightArrow />

                </div>
            </GridCard>
            <GridCard title="Sait Badminton Club">
                <div className="grid grid-cols-3 grid-rows-2">
                    <EventCard title="Friendly Friday Match" gridSet="row-span-2 h-48" />
                    <EventCard title="Friendly Friday Match" gridSet="col-start-2 row-span-1" />
                    <EventCard title="Friendly Friday Match" gridSet="row-span-1 row-start-2 col-start-2" />
                    <RightArrow />
                </div>
            </GridCard>
        </div>
    </div >
}

function EventCard({ title, gridSet }: { title: string, gridSet?: string }) {
    return (
        <div className={`cursor-pointer border-2 border-white relative flex justify-center items-center ${gridSet}`}>
            <div className="absolute z-10 inset-0 hover:bg-green-400 opacity-30"></div>
            <h4 className="text-xl">{title}</h4>
        </div>)
}

function GridCard({ title, children }: { title: string, children: JSX.Element }) {
    return <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {children}
    </div>
}

function RightArrow() {
    return <div className="row-span-2 col-span-1 border-white border-2 flex justify-center items-center relative cursor-pointer">
        <div className="absolute z-10 inset-0 hover:bg-green-400 opacity-30"></div>
        <div className="border-t-8 border-r-8 rotate-45 border-white w-1/6 aspect-square "></div>
    </div>
}