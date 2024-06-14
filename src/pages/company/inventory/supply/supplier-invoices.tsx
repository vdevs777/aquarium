import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export default function SupplierInvoices() {
    return (
        <div>
            <PageHeader path="Inventário / Fornecimento /" title="Faturas de fornecedores" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}