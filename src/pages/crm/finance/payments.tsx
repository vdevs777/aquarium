import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function Payments() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Pagamentos" icon={<DollarSign />}/>
        </div>
    )
}