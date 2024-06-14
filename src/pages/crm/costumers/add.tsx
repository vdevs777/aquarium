import React, { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User } from "lucide-react";
import { FormularioPessoaFisica } from "@/components/clientes/formulario-pessoa-fisica";
import { FormularioPessoaJuridica } from "@/components/clientes/formulario-pessoa-juridica";

export default function Add() {
  const [selectedOption, setSelectedOption] = useState("pessoa-fisica");

  return (
    <div>
      <PageHeader path="Clientes" title="Adicionar" icon={<User />} />

      <div className="bg-white rounded-sm flex flex-col w-full p-6">
        <RadioGroup
          defaultValue={selectedOption}
          className="flex flex-row mb-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="pessoa-fisica"
              id="pessoa-fisica"
              onClick={() => setSelectedOption("pessoa-fisica")}
            />
            <Label htmlFor="pessoa-fisica">Pessoa física</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="pessoa-juridica"
              id="pessoa-juridica"
              onClick={() => setSelectedOption("pessoa-juridica")}
            />
            <Label htmlFor="pessoa-juridica">Pessoa jurídica</Label>
          </div>
        </RadioGroup>

        {selectedOption === "pessoa-fisica" ? (
          <FormularioPessoaFisica />
        ) : (
          <FormularioPessoaJuridica />
        )}
      </div>
    </div>
  );
}
