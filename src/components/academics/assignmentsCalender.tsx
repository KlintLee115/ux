import { WEEK, dayMappings } from "@/helpers/helper";

export default function AssignmentsCalender() {
    const grids: JSX.Element[][] = [];

    // Populate the grid with numbers and days of the week
    for (let i = 0; i < 6; i++) {
        const newRow: JSX.Element[] = [];
        for (let j = 0; j < 7; j++) {
            if (i === 0) {
                newRow.push(<div className="w-[calc(100%/7.2)] justify-center text-xl h-14 border border-black flex items-center"><p className="text-lg">{dayMappings[WEEK[j]]}</p></div>);
            } else {
                const num = i * 7 + j - 6;
                num < 32 && newRow.push(<div className="w-[calc(100%/7.2)] border h-32 border-black"><p className="text-xl">{num}</p></div>);
            }
        }
        grids.push(newRow);
    }

    grids[3][4] = (

        <div className="w-[calc(100%/7.2)] aspect-square h-32 border border-black">
            <p className="text-xl">19</p>
            <div className="flex flex-col text-sm justify-evenly text-center h-[80%]">
                <p>CPRG 250 Assignment 1</p>
                <p>CPSY 200 Assignment 2</p>
            </div>
        </div>)


    grids[2][3] = (

        <div className="w-[calc(100%/7.2)] aspect-square h-32 border border-black">
            <p className="text-xl">11</p>
            <div className="flex flex-col text-sm justify-evenly text-center h-[80%]">
                <p>CPRG 215 Assignment 1</p>
                <p>CPSY 216 Assignment 2</p>
            </div>
        </div>)

    return (
        <div className="w-[calc(100%-2vw)] mx-auto">
            {grids.map(row => <div className="flex">{row}</div>)}
        </div>
    )
}