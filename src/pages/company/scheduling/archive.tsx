import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export default function Archive() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Arquivo" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}