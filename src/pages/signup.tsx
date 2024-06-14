import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import api from "@/lib/services";
import { config, title } from "process";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Router, { useRouter } from "next/router";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Infinity } from "lucide-react";
import Link from "next/link";

const signInSchema = z.object({
  nome: z.string().min(1, "Informe seu nome"),
  razao_social: z.string().min(1, "Informe sua razão social"),
  cnpj: z.string().min(1, "Informe seu CNPJ"),
});

type SignInSchema = z.infer<typeof signInSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const [loading, setLoading] = useState(false);
  const [filiais, setFiliais] = useState([]);

  async function handleSignIn(data: SignInSchema) {
    setLoading(true);

    await api
      .get(
        `/api/Account/register?nome=${data.nome}&razaoSocial=${data.razao_social}&cnpj=${data.cnpj}`
      )
      .then((response) => {
        setToken(response.data.Token);

        obterFiliais();
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  }

  function setToken(token: string) {
    if (localStorage.getItem("token") != null) {
      localStorage.removeItem("token");
    }
    localStorage.setItem("token", token);
  }

  async function selecionarFilial(id: any) {
    await api
      .post("/api/account/filiais?filialId=" + id, null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setToken(response.data.Token);

        Router.push("/");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro:" + err);
      });
  }

  async function obterFiliais() {
    await api
      .get("/api/account/filiais", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setFiliais(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro:" + err);
      });
  }

  const router = useRouter();

  function handleGoToSignup() {
    router.push("/signup");
  }

  return (
    <div className="flex flex-1 flex-row bg-[#F7F8FC]">
      <div className="flex w-4/6 h-screen items-center justify-center flex-col">
        <Image src="/aquarium.png" alt="Logo" width={419} height={55} />
      </div>
      <div className="flex text-white bg-sky-950 w-2/6 h-screen items-center justify-center flex-col">
        {/* <Image src="/logoCliente.png" alt="Logo" width={288} height={120} /> */}

        <div className="p-10 bg-white w-[500px] rounded-md flex items-center flex-col mt-10">
          <h4 className="font-semibold text-gray-800 text-lg pb-10">
            Crie sua conta
          </h4>
          <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <Input
                className="h-8 rounded-sm text-black"
                placeholder="Nome"
                disabled={loading}
                {...register("nome")}
              />
              {errors.nome?.message && (
                <span className="text-red-600 text-sm flex items-center ">
                  {errors.nome.message}
                </span>
              )}
              <Input
                className="h-8 rounded-sm mt-4 text-black"
                placeholder="Razão social"
                disabled={loading}
                {...register("razao_social")}
              />
              {errors.razao_social?.message && (
                <span className="text-red-600 text-sm flex items-center ">
                  {errors.razao_social.message}
                </span>
              )}
              <Input
                className="h-8 rounded-sm mt-4 text-black"
                placeholder="CNPJ"
                disabled={loading}
                {...register("cnpj")}
              />
              {errors.cnpj?.message && (
                <span className="text-red-600 text-sm flex items-center ">
                  {errors.cnpj.message}
                </span>
              )}
            </div>

            <div className="flex flex-end justify-between mt-5 items-center">
              <Button
                className="w-[70px] h-8 font-medium bg-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Registrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
