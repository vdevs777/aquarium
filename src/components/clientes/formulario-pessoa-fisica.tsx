import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputWithCustomMask } from "@/components/ui/input-with-custom-mask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pessoaFisicaFormSchema = z.object({
  nome: z.string({ required_error: "Informe o nome" }).min(1),
  cpf: z.string({ required_error: "Informe o CPF" }).refine(
    (value) => {
      const onlyNumbers = value.replace(/\D/g, "");
      return onlyNumbers.length === 11;
    },
    {
      message: "O CPF é inválido",
    }
  ),
  dataDeNascimento: z.string({
    required_error: "Informe a data de nascimento",
  }),
  rg: z.string().optional(),
  orgaoExpedidor: z.string().optional(),
  genero: z.string({ required_error: "Informe o gênero" }),
  naturalidade: z.string().optional(),
  nacionalidade: z.string().optional(),
});

type PessoaFisicaFormSchema = z.infer<typeof pessoaFisicaFormSchema>;

export function FormularioPessoaFisica() {
  const form = useForm<PessoaFisicaFormSchema>({
    resolver: zodResolver(pessoaFisicaFormSchema),
  });

  function onSubmit(values: PessoaFisicaFormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-0">
        <>
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">Nome</FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    placeholder="nome"
                    error={form.formState.errors.nome?.message}
                    className="h-9"
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage className="col-span-12" /> */}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">CPF</FormLabel>
                <FormControl className="col-span-10">
                  <InputWithCustomMask
                    mask="999.999.999-99"
                    placeholder="CPF"
                    error={form.formState.errors.cpf?.message}
                    className="h-9"
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage className="col-span-12" /> */}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dataDeNascimento"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">Data</FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    type="date"
                    error={form.formState.errors.dataDeNascimento?.message}
                    className="h-9"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rg"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">RG</FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    error={form.formState.errors.rg?.message}
                    className="h-9"
                    placeholder="rg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orgaoExpedidor"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">Órgão expedidor</FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    error={form.formState.errors.orgaoExpedidor?.message}
                    className="h-9 uppercase placeholder:lowercase"
                    placeholder="órgão expedidor"
                    doNotAcceptNumbers
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genero"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">Gênero</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="col-span-10">
                    <SelectTrigger
                      className="text-sm h-9"
                      error={form.formState.errors.genero?.message}
                    >
                      <SelectValue placeholder="Selecione o gênero" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                    <SelectItem value="prefiroNaoInformar">
                      Prefiro não informar
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nacionalidade"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">Nacionalidade</FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    error={form.formState.errors.nacionalidade?.message}
                    className="h-9"
                    placeholder="nacionalidade"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="naturalidade"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2">Naturalidade</FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    error={form.formState.errors.naturalidade?.message}
                    className="h-9"
                    placeholder="naturalidade"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </>
        <div className="grid justify-end pt-2">
          <Button className="bg-primary" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
}
