import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export default function History() {
    return (
        <div>
            <PageHeader path="Mensagens / Envio em massa /" title="Histórico" icon={<Mail/>}/>
        </div>
    )
}