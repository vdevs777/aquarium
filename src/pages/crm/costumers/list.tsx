import {
  Payment,
  columns,
} from "@/components/costumers-list/column-definitions";
import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { customers } from "@/data/customers";
import { User } from "lucide-react";

function getData(): Payment[] {
  return customers;
}

export default function List() {
  const data = getData();
  return (
    <div>
      <PageHeader path="Clientes /" title="Lista" icon={<User />} />
      <div className="bg-white rounded-sm p-6 flex flex-col gap-4">
        <div>
          <DataTable columns={columns} data={data} customerIdKey="id" />
        </div>
        <div className="flex gap-5 items-center justify-end"></div>
      </div>
    </div>
  );
}
