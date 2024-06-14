import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export default function Archives() {
    return (
        <PageHeader path="Tickets /" title="Arquivos" icon={<Ticket />} />
    )
}