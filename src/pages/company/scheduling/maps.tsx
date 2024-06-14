import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export default function Maps() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Mapas" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}