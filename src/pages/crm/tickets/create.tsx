import { PageHeader } from "@/components/page-header";
import { Check, ChevronsUpDown, Ticket } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import {
  customersArray,
  assignedToArray,
  groupsArray,
  watchersArray,
  priorityArray,
  statusArray,
  ticketTypeArray,
} from "../../../others/create-ticket-provisory-informations";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

export const createTicketSchema = z.object({
  customerOrLead: z.string({ required_error: "Informe o cliente/lead" }),
  assignedTo: z.string().default(''),
  group: z.string({ required_error: "Informe o grupo" }).default(''),
  observators: z.string().default(''),
  ccRecipients: z.string().default(''),
  priority: z.string({ required_error: "Informe a prioridade" }).default(''),
  status: z.string({ required_error: "Informe o status" }).default(''),
  type: z.string({ required_error: "Informe o tipo do ticket" }).default(''),
  subject: z.string({ required_error: "Informe o assunto" }).default(''),
  message: z.string({ required_error: "Informe a mensagem" }).default(''),
});

export default function Create() {
  const form = useForm<z.infer<typeof createTicketSchema>>({
    resolver: zodResolver(createTicketSchema),
  });

  function submitTicket(data: z.infer<typeof createTicketSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    
  }

  const [openPopovers, setOpenPopovers] = useState({
    customer: false,
    assignedTo: false,
    group: false,
    watchers: false,
    priority: false,
    status: false,
    ticketType: false,
  });

  const [value, setValue] = useState("");
  const [teste, setTeste] = useState()

  function handleOpenChange(popoverName: string, value: boolean) {
    setOpenPopovers({
      ...openPopovers,
      [popoverName]: value,
    });
  }

  return (
    <div>
      <PageHeader path="Tickets /" title="Criar" icon={<Ticket />} />
      <div className="flex flex-row gap-3">
        <div className="bg-white w-2/3 h-full rounded-md shadow-sm p-6">
          <Form {...form}>
            <form className="flex flex-row gap-3">
              <div className="w-[347px] flex items-end text-center flex-col gap-y-3">
                <label className="text-xs h-8 flex justify-center items-center">
                  Cliente
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Atribuído a
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Grupo
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Observadores
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Destinatários CC
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Prioridade
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Status
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Tipo
                </label>
                <label className="text-xs h-8 flex justify-center items-center">
                  Assunto
                </label>
                <label className="text-xs h-52">Mensagem</label>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4">
                  <FormField
                    name="customerOrLead"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Popover
                          open={openPopovers.customer}
                          onOpenChange={(value) =>
                            handleOpenChange("customer", value)
                          }
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openPopovers.customer}
                              className={cn(
                                `w-[331px] max-w-[678px] justify-between h-8`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? customersArray.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "Selecione o cliente"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[331px]">
                            <Command>
                              <CommandInput placeholder="Pesquise um cliente" />
                              <CommandEmpty>
                                Não foi encontrado nenhum cliente
                              </CommandEmpty>
                              <CommandGroup>
                                {customersArray.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenPopovers({
                                        ...openPopovers,
                                        customer: false,
                                      });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />

                  <div className="gap-4 flex items-center">
                    <Switch id="hidden" className="h-5 w-9" />{" "}
                    <span className="text-sm">Oculto</span>
                  </div>
                </div>

                <div>
                  <FormField
                    name="assignedTo"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Popover
                          open={openPopovers.assignedTo}
                          onOpenChange={(value) =>
                            handleOpenChange("assignedTo", value)
                          }
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openPopovers.assignedTo}
                              className={cn(
                                `w-[678px] max-w-[678px] justify-between h-8`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? assignedToArray.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "---"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[331px]">
                            <Command>
                              <CommandInput placeholder="" />
                              <CommandEmpty>
                                Não foram encontrados resultados
                              </CommandEmpty>
                              <CommandGroup>
                                {assignedToArray.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenPopovers({
                                        ...openPopovers,
                                        assignedTo: false,
                                      });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="group"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Popover
                          open={openPopovers.group}
                          onOpenChange={(value) =>
                            handleOpenChange("group", value)
                          }
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openPopovers.group}
                              className={cn(
                                `w-[678px] max-w-[678px] justify-between h-8`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? groupsArray.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "Selecione o grupo"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[331px]">
                            <Command>
                              <CommandInput placeholder="" />
                              <CommandEmpty>
                                Não foram encontrados resultados
                              </CommandEmpty>
                              <CommandGroup>
                                {groupsArray.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenPopovers({
                                        ...openPopovers,
                                        group: false,
                                      });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="observators"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Popover
                          open={openPopovers.watchers}
                          onOpenChange={(value) =>
                            handleOpenChange("watchers", value)
                          }
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openPopovers.watchers}
                              className={cn(
                                `w-[678px] max-w-[678px] justify-between h-8`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? watchersArray.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "---"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[331px]">
                            <Command>
                              <CommandInput placeholder="" />
                              <CommandEmpty>
                                Não foram encontrados resultados
                              </CommandEmpty>
                              <CommandGroup>
                                {watchersArray.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenPopovers({
                                        ...openPopovers,
                                        watchers: false,
                                      });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="ccRecipients"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input className="h-8" color="#FAFAFA" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="priority"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Popover
                          open={openPopovers.priority}
                          onOpenChange={(value) =>
                            handleOpenChange("priority", value)
                          }
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openPopovers.priority}
                              className={cn(
                                `w-[678px] max-w-[678px] justify-between h-8`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? priorityArray.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "Selecione a prioridade"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[331px]">
                            <Command>
                              <CommandInput placeholder="" />
                              <CommandEmpty>
                                Não foram encontrados resultados
                              </CommandEmpty>
                              <CommandGroup>
                                {priorityArray.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenPopovers({
                                        ...openPopovers,
                                        priority: false,
                                      });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="status"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Popover
                          open={openPopovers.status}
                          onOpenChange={(value) =>
                            handleOpenChange("status", value)
                          }
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openPopovers.status}
                              className={cn(
                                `w-[678px] max-w-[678px] justify-between h-8`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? statusArray.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "Selecione o status"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[331px]">
                            <Command>
                              <CommandInput placeholder="" />
                              <CommandEmpty>
                                Não foram encontrados resultados
                              </CommandEmpty>
                              <CommandGroup>
                                {statusArray.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenPopovers({
                                        ...openPopovers,
                                        status: false,
                                      });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="type"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Popover
                          open={openPopovers.ticketType}
                          onOpenChange={(value) =>
                            handleOpenChange("ticketType", value)
                          }
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openPopovers.ticketType}
                              className={cn(
                                `w-[678px] max-w-[678px] justify-between h-8`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? ticketTypeArray.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "Selecione o cliente"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[331px]">
                            <Command>
                              <CommandInput placeholder="Pesquise um cliente" />
                              <CommandEmpty>
                                Não foram encontrados resultados
                              </CommandEmpty>
                              <CommandGroup>
                                {ticketTypeArray.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenPopovers({
                                        ...openPopovers,
                                        ticketType: false,
                                      });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="subject"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input className="h-8" color="#FAFAFA" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea className="resize-none h-52" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    className="bg-blue-600 h-8"
                    onClick={form.handleSubmit(submitTicket)}
                  >
                    Criar
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="bg-white w-1/3 h-full rounded-md shadow-sm">sasa</div>
      </div>
    </div>
  );
}
