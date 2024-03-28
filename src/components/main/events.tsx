export default function Events() {
    return <div className="my-16">
        <h2 className="text-blue-600 font-bold text-3xl">YOUR EVENTS..</h2>
        <div className="border border-black rounded-lg p-4">
            <div className="flex justify-evenly">
                <EventItem title="This week">
                    <ul>
                        <li className="list-disc">
                            <p>05 - Tuition</p>
                        </li>
                        <li className="list-disc">
                            <p>20 - DROP CLASS</p>
                        </li>
                    </ul>
                </EventItem>

                <EventItem title="This month">
                    <ul>
                        <li className="list-disc">
                            <p>05 - Tuition</p>
                        </li>
                        <li className="list-disc">
                            <p>20 - DROP CLASS</p>
                        </li>
                    </ul>
                </EventItem>

                <EventItem title="NEXT >">
                    <></>
                </EventItem>
            </div>
        </div>
    </div >
}

function EventItem({ title, children }: { title: string, children: JSX.Element }) {
    return <div>
        <h3>{title}</h3>
        {children}
    </div>
}