import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export default function SoldAndRentedItems() {
    return (
        <div>
            <PageHeader path="Inventário / Fornecimento /" title="Itens vendidos e alugados" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}