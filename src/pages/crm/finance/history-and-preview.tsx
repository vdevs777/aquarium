import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function HistoryAndPreview() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Histórico e visualização" icon={<DollarSign />}/>
        </div>
    )
}