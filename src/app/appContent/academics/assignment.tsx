export default function AssignmentsByCourses() {
    return (
        <div className="flex gap-y-9 flex-wrap justify-evenly">
            <AssignmentByCourse title="CPRG250">
                <div className="flex">
                    <div>
                        <h4 className="font-semibold">Assignments</h4>
                        <p className="line-clamp-1">Recursive programming</p>
                        <p className="line-clamp-1">Connecting to database</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Deadlines</h4>
                        <p className="line-clamp-1">24th January 2024</p>
                        <p className="line-clamp-1">29th January 2024</p>
                    </div>
                </div>
            </AssignmentByCourse>
            <AssignmentByCourse title="CPSY200" >
                <div className="flex">
                    <div>
                        <h4 className="font-semibold">Assignments</h4>
                        <p className="line-clamp-1">Analysis of database</p>
                        <p className="line-clamp-1">Construct analysis</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Deadlines</h4>
                        <p className="line-clamp-1">27th January 2024</p>
                        <p className="line-clamp-1">31st January 2024</p>
                    </div>
                </div>
            </AssignmentByCourse>
            <AssignmentByCourse title="CPRD201">
                <div className="flex">
                    <div>
                        <h4 className="font-semibold">Assignments</h4>
                        <p className="line-clamp-1">Analysis of database</p>
                        <p className="line-clamp-1">Construct analysis</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Deadlines</h4>
                        <p className="line-clamp-1">27th January 2024</p>
                        <p className="line-clamp-1">31st January 2024</p>
                    </div>
                </div>
            </AssignmentByCourse>
            <AssignmentByCourse title="CPSY250">
                <div className="flex">
                    <div>
                        <h4 className="font-semibold">Assignments</h4>
                        <p className="line-clamp-1">Analysis of database</p>
                        <p className="line-clamp-1">Construct analysis</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Deadlines</h4>
                        <p className="line-clamp-1">27th January 2024</p>
                        <p className="line-clamp-1">31st January 2024</p>
                    </div>
                </div>
            </AssignmentByCourse>
            <AssignmentByCourse title="CPSY250">
                <div className="flex">
                    <div>
                        <h4 className="font-semibold">Assignments</h4>
                        <p className="line-clamp-1">Analysis of database</p>
                        <p className="line-clamp-1">Construct analysis</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Deadlines</h4>
                        <p className="line-clamp-1">27th January 2024</p>
                        <p className="line-clamp-1">31st January 2024</p>
                    </div>
                </div>
            </AssignmentByCourse>
        </div>
    )
}


function AssignmentByCourse({ children, title }: { children: JSX.Element, title: string }) {
    return <div className="w-60">
        <h3 className="font-semibold text-lg text-center">{title}</h3>
        {children}
    </div>
}
