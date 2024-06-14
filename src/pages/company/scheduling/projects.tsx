import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export default function Projects() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Projetos" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}