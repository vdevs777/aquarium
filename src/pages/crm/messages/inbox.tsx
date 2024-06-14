import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export default function Inbox() {
    return (
        <div>
            <PageHeader path="Mensagens /" title="Caixa de entrada" icon={<Mail/>}/>
        </div>
    )
}