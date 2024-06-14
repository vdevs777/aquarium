import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputWithCustomMask } from "@/components/ui/input-with-custom-mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const pessoaJuridicaFormSchema = z.object({
  nome: z.string({ required_error: "Informe o nome" }).min(1),
  razaoSocial: z.string({ required_error: "Informe a razão social" }),
  cnpj: z.string({ required_error: "Informe o CNPJ" }),
  // .refine(
  //   (value) => {
  //     const onlyNumbers = value.replace(/[_\/.]/g, "");
  //     return onlyNumbers.length === 14;
  //   },
  //   {
  //     message: "O CNPJ é inválido",
  //   }
  // )
  contribuinte: z.string({ required_error: "Informe o contribuinte" }),
  inscricaoEstadual: z.string({
    required_error: "Informe a inscrição estadual",
  }),
  inscricaoMunicipal: z.string({
    required_error: "Informe a inscrição municipal",
  }),
  dataAbertura: z.string({ required_error: "Informe a data de abertura" }),
});

type PessoaJuridicaFormSchema = z.infer<typeof pessoaJuridicaFormSchema>;

export function FormularioPessoaJuridica() {
  const form = useForm<PessoaJuridicaFormSchema>({
    resolver: zodResolver(pessoaJuridicaFormSchema),
  });

  function onSubmit(values: PessoaJuridicaFormSchema) {
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
                <FormLabel className="col-span-2 text-sm">Nome</FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    placeholder="nome"
                    error={form.formState.errors.nome?.message}
                    className="h-9"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* XX.XXX.XXX/YYYY-ZZ */}
          <FormField
            control={form.control}
            name="razaoSocial"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2 text-sm">
                  Razão social
                </FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    placeholder="razão social"
                    error={form.formState.errors.razaoSocial?.message}
                    className="h-9"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2 text-sm">CNPJ</FormLabel>
                <FormControl className="col-span-10">
                  <InputWithCustomMask
                    mask="99.999.999/9999-99"
                    placeholder="CNPJ"
                    error={form.formState.errors.cnpj?.message}
                    className="h-9"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contribuinte"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2 text-sm">
                  Contribuinte
                </FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    placeholder="contribuinte"
                    error={form.formState.errors.contribuinte?.message}
                    className="h-9"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="inscricaoEstadual"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2 text-sm">
                  Inscrição estadual
                </FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    placeholder="inscrição estadual"
                    error={form.formState.errors.inscricaoEstadual?.message}
                    className="h-9"
                    doNotAcceptLetters
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="inscricaoMunicipal"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2 text-sm">
                  Inscrição municipal
                </FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    placeholder="inscrição municipal"
                    error={form.formState.errors.inscricaoMunicipal?.message}
                    className="h-9"
                    doNotAcceptLetters
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dataAbertura"
            render={({ field }) => (
              <FormItem className="items-baseline gap-4 text-end grid grid-cols-12">
                <FormLabel className="col-span-2 text-sm">
                  Data abertura
                </FormLabel>
                <FormControl className="col-span-10">
                  <Input
                    type="date"
                    error={form.formState.errors.dataAbertura?.message}
                    className="h-9"
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
