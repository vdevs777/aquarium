import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export default function List() {
    return (
        <PageHeader path="Tickets /" title="Lista" icon={<Ticket />} />
    )
}