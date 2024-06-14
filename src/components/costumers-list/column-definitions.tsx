import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { SortableTableHeader } from "../sortable-table-header";

export type Payment = {
  id: string;
  nome: string;
  CPF_CNPJ: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          variant="ghost"
          className="p-0 m-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </SortableTableHeader>
      )
    },
  },
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          variant="ghost"
          className="p-0 m-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </SortableTableHeader>
      )
    },
  },
  {
    accessorKey: "CPF_CNPJ",
    header: "CPF/CNPJ"
  },
];
