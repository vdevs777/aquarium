import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export default function Suppliers() {
    return (
        <div>
            <PageHeader path="Inventário / Fornecimento /" title="Fornecedores" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}