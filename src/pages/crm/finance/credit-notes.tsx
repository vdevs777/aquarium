import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function CreditNotes() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Notas de crédito" icon={<DollarSign />}/>
        </div>
    )
}