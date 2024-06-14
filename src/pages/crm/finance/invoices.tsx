import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, DollarSign, RotateCw } from "lucide-react";
import React, { useState } from "react";

export default function Invoices() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="pr-4">
      <div className="w-full flex flex-row items-center justify-between">
        <div>
          <PageHeader path="Finanças /" title="Faturas" icon={<DollarSign />} />
        </div>
        <div className="flex-row-reverse flex gap-1 items-center">
          <Button
            className="h-8 rounded-sm border-black hover:bg-black hover:text-white"
            variant="outline"
          >
            Cobrar
          </Button>
          <Button
            className="h-8 rounded-sm border-black hover:bg-black hover:text-white"
            variant="outline"
          >
            Exportar
          </Button>
          <Button
            className="h-8 w-8 rounded-sm border-black hover:bg-black hover:text-white"
            variant="outline"
          >
            <span>
              <RotateCw className="w-5 h-5 font-normal" />
            </span>
          </Button>
          <div className="flex flex-row items-center gap-2">
            <span className="text-xs">Status</span>
            <Select>
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Qualquer</SelectItem>
                <SelectItem value="paid">Pago</SelectItem>
                <SelectItem value="unpaid">Não pago</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="deleted">Excluído</SelectItem>
                <SelectItem value="overdue">Atrasado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="text-xs">Parceiro</span>
            <Select>
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Selecione o parceiro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reseller">Fornecedor de ração</SelectItem>
                <SelectItem value="company">Fornecedor de alevino</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row items-center gap-2 max-h-8">
            <span className="text-xs">Período</span>
          <DatePickerWithRange />
          </div>
          <Input placeholder="Número" className="h-8 w-[190px] placeholder:text-xs"/>
        </div>
      </div>
    </div>
  );
}
