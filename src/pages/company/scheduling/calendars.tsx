import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export default function Calendars() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Calendários" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}