import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function History() {
    return (
        <div>
            <PageHeader path="Finanças / Extratos de pagamento /" title="Histórico" icon={<DollarSign />}/>
        </div>
    )
}