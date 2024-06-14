import { ReactNode } from "react";

interface PageHeaderProps {
    path?: string,
    title: string,
    color?: string;
    icon: ReactNode,
}

export function PageHeader({ icon, path, title, color = 'bg-purple-500' }: PageHeaderProps) {
    return (
        <div className="h-[92px] flex items-center">
            <div className="max-h-12 flex items-center gap-4">
                <div className={`w-10 h-10 ${color} text-white rounded-sm flex items-center justify-center`}>{icon}</div>
                <div>
                    <span className="text-base text-blue-500">{path}</span>
                    <p className="font-bold text-xl text-slate-800 ">{title}</p>
                </div>
            </div>
        </div>
    )
}