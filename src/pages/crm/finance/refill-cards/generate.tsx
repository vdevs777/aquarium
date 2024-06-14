import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function Generate() {
    return (
        <div>
            <PageHeader path="Finanças / Recargas de cartão /" title="Gerar" icon={<DollarSign />}/>
        </div>
    )
}