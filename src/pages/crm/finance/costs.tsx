import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function Costs() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Custos" icon={<DollarSign />}/>
        </div>
    )
}