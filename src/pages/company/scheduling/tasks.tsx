import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export default function Tasks() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Tarefas" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}