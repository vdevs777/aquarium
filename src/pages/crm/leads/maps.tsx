import { PageHeader } from "@/components/page-header";
import { Megaphone } from "lucide-react";

export default function Maps() {
    return (
        <div>
            <PageHeader path="Leads /" title="Mapa" icon={<Megaphone />}/>
        </div>
    )
}