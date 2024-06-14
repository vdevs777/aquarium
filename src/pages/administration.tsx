import { PageHeader } from "@/components/page-header";
import { ShieldPlus } from "lucide-react";

export default function Administration() {
    return (
        <div>
            <PageHeader title="Administração" color="bg-zinc-700" icon={<ShieldPlus />}/>
        </div>
    )
}