import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export default function Create() {
    return (
        <div>
            <PageHeader path="Mensagens / Envio em massa /" title="Criar" icon={<Mail/>}/>
        </div>
    )
}