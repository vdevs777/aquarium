import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export default function Dashboard() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Painel" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}