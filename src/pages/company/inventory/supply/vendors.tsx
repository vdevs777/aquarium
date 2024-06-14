import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export default function Vendords() {
    return (
        <div>
            <PageHeader path="Inventário / Fornecimento /" title="Vendedores" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}