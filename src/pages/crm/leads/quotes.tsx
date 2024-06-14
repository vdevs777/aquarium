import { PageHeader } from "@/components/page-header";
import { Megaphone } from "lucide-react";

export default function Quotes() {
    return (
        <div>
            <PageHeader path="Leads /" title="Cotas" icon={<Megaphone />}/>
        </div>
    )
}