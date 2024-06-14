import { PageHeader } from "@/components/page-header";
import { Megaphone } from "lucide-react";

export default function List() {
    return (
        <div>
            <PageHeader path="Leads /" title="Lista" icon={<Megaphone />}/>
        </div>
    )
}