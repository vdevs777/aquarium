import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export default function Dashboard() {
    return (
        <PageHeader path="Tickets /" title="Painel" icon={<Ticket />} />
    )
}