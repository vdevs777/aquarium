import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function Transactions() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Transações" icon={<DollarSign />}/>
        </div>
    )
}