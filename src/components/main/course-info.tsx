function GradeComponent({ text }: { text: string }) {
    return <p>{text}</p>
}

function GradeCourseTitleComponent({ text }: { text: string }) {
    return <h2 className="font-bold">{text}</h2>
}

export default function Grades() {
    return (
        <>
            <div className="border-black border w-auto p-4 mt-4">
                <p className="text-3xl">GPA</p>
                <p className="text-center text-7xl text-blue-800">4.7</p>
                <p className="text-base mt-4">Description</p>
                <div className="flex gap-3">
                    <div>
                        <GradeCourseTitleComponent text="Course name" />
                        <GradeComponent text="CPRG250" />
                        <GradeComponent text="CPRG360" />
                        <GradeComponent text="CPSY200" />
                        <GradeComponent text="OOP100" />
                    </div>

                    <div><GradeCourseTitleComponent text="Grade" />
                        <GradeComponent text="80%" />
                        <GradeComponent text="80%" />
                        <GradeComponent text="80%" />
                        <GradeComponent text="80%" />
                    </div>
                </div>
            </div>
        </>
    );
}
