import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function ProformaInvoices() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Faturas proforma" icon={<DollarSign />}/>
        </div>
    )
}