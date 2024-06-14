import { List, ListIcon, Scroll } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  number: number;
  details?: string;
  color: string;
};

export function CardItem({ icon, number, title, details, color }: Props) {
  const truncatedTitle = title.length > 12 ? `${title.slice(0, 15)}...` : title;
  const isTruncated = truncatedTitle !== title;

  return (
    <div className="w-full sm:w-auto max-w-[24.25rem] h-[88px] bg-white flex">
      <div className="flex p-4 flex-col min-w-full gap-2.5">
        <div className="flex w-full items-center gap-2">
          {icon}
          <h4 className={`font-semibold ${isTruncated ? 'truncate' : ''}`}>{title}</h4>
        </div>
        <div className="flex w-full justify-between items-center">
          <span className="text-blue-500 text-sm">{details}</span>
          <span className={`font-bold text-xl ${color}`}>{number}</span>
        </div>
      </div>
    </div>
  );
}