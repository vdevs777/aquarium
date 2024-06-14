import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export default function Items() {
    return (
        <div>
            <PageHeader path="Inventário /" title="Itens" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}