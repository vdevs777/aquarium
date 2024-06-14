import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export default function Search() {
    return (
        <div>
            <PageHeader path="Clientes /" title="Pesquisar" icon={<User />}/>
        </div>
    )
}