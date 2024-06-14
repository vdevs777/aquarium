import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export default function News() {
    return (
        <div>
            <PageHeader path="Mensagens /" title="Novidades" icon={<Mail/>}/>
        </div>
    )
}