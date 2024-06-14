import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export default function Recipients() {
    return (
        <PageHeader path="Tickets /" title="Destinatários" icon={<Ticket />} />
    )
}