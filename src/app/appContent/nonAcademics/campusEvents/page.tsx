export default function Page() {
    return <div>
        <div className="w-[70vw] mx-auto">
            <h2 className="text-3xl font-semibold mb-3">Your enrolled clubs</h2>
            <div className="flex flex-col gap-8">
                <GridCard title="Sait Badminton Club">
                    <div className="grid grid-cols-3 grid-rows-2">
                        <EventCard title="SaitSa Trojan Draft 1st round" gridSet="row-span-2 h-48" />
                        <EventCard title="SaitSa Trojan Draft 2nd round" gridSet="col-start-2 row-span-1" />
                        <EventCard title="SaitSa Trojan inner tournament" gridSet="row-span-1 row-start-2 col-start-2" />

                        <div className="hover:bg-cyan-200 cursor-pointer border-2 border-black row-span-2 col-span-1 flex justify-center">
                            <img width="120" height="120" src="https://img.icons8.com/ios-filled/50/arrow.png" alt="arrow" />
                        </div>
                    </div>
                </GridCard>
                <GridCard title="Sait Hockey Club">
                    <div className="grid grid-cols-3 grid-rows-2">
                        <EventCard title="SaitSa Trojan Draft 1st round" gridSet="row-span-2 h-48" />
                        <EventCard title="SaitSa Trojan Draft 2nd round" gridSet="col-start-2 row-span-1" />
                        <EventCard title="SaitSa Trojan inner tournament" gridSet="row-span-1 row-start-2 col-start-2" />

                        <div className="hover:bg-cyan-200 cursor-pointer border-2 border-black row-span-2 col-span-1 flex justify-center">
                            <img width="120" height="120" src="https://img.icons8.com/ios-filled/50/arrow.png" alt="arrow" />
                        </div>
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

                        <div className="hover:bg-cyan-200 cursor-pointer border-2 border-black row-span-2 col-span-1 flex justify-center">
                            <img width="120" height="120" src="https://img.icons8.com/ios-filled/50/arrow.png" alt="arrow" />
                        </div>
                    </div>
                </GridCard>
                <GridCard title="Sait Badminton Club">
                    <div className="grid grid-cols-3 grid-rows-2">
                        <EventCard title="Friendly Friday Match" gridSet="row-span-2 h-48" />
                        <EventCard title="Friendly Friday Match" gridSet="col-start-2 row-span-1" />
                        <EventCard title="Friendly Friday Match" gridSet="row-span-1 row-start-2 col-start-2" />

                        <div className="hover:bg-cyan-200 cursor-pointer border-2 border-black row-span-2 col-span-1 flex justify-center">
                            <img width="120" height="120" src="https://img.icons8.com/ios-filled/50/arrow.png" alt="arrow" />
                        </div>
                    </div>
                </GridCard>
            </div>
        </div>
    </div >
}

function EventCard({ title, gridSet }: { title: string, gridSet?: string }) {
    return (
        <div className={`hover:bg-cyan-200 hover:cursor-pointer border-2 border-black relative flex justify-center items-center ${gridSet}`}>
            <h4 className="text-2xl">{title}</h4>
            <img width="40" height="40" className="absolute top-0 right-0" src="https://img.icons8.com/ios-filled/50/arrow.png" alt="arrow" />
        </div>)
}

function GridCard({ title, children }: { title: string, children: JSX.Element }) {
    return <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {children}
    </div>
}