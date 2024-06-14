import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export default function ClosedTickets() {
    return (
        <PageHeader path="Tickets /" title="Tickets fechados" icon={<Ticket />} />
    )
}