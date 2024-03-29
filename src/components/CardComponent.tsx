import Link from "next/link";

type CardProps = {
    title: string;
    children: JSX.Element;
} & (
        {
            link: string;
            contFromCurrDir?: boolean;
        } | {
            link?: never;
            contFromCurrDir?: never;
        }
    );


export function Card({ title, children, link, contFromCurrDir = true }: CardProps) {

    return <div className="bg-gradient-to-r bg-purple-700 from-purple-700 via-blue-700 px-2 py-3 outline">
        <div className="flex justify-between items-center mb-4">
            <h4 className="text-3xl font-bold">{title}</h4>
            {
                link && <Link href={contFromCurrDir ? "/appContent/nonAcademics" + link : link}><p className="text-nowrap">Learn more</p></Link>
            }
        </div>
        {children}
    </div>
}