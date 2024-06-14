import { PageHeader } from "@/components/page-header";
import { Megaphone } from "lucide-react";

export default function AddLead() {
    return (
        <div>
            <PageHeader path="Leads /" title="Adicionar líder" icon={<Megaphone />}/>
        </div>
    )
}