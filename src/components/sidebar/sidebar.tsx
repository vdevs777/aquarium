import {
  Calendar,
  DollarSign,
  Globe,
  Layers,
  LayoutTemplate,
  Mail,
  Megaphone,
  Mic,
  PlusCircle,
  ShieldPlus,
  SlidersHorizontal,
  Ticket,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { SidebarOpenButton } from "./buttons/sidebar-open-button";
import { SidebarSubButton } from "./buttons/sidebar-sub-button";
import { CollapsibleSidebarSubButton } from "./buttons/collapsible-sidebar-sub-button";
import Link from "next/link";
import { useRouter } from "next/router";

export function Sidebar() {
  const router = useRouter();

  return (
    <div className="lg:block hidden">
      <div className="max-w-[236px] min-w-[236px] min-h-screen bg-neutral-50 flex flex-col pt-8">
        <Link href="/">
          <Button
            className={`font-normal w-full h-8 rounded-none flex justify-start gap-4  bg-neutral-50 text-slate-800 hover:text-white hover:bg-zinc-600 ${
              router.pathname === "/" && "bg-zinc-600 text-white"
            }`}
          >
            <LayoutTemplate strokeWidth="1.5px" width={20} /> Painel
          </Button>
        </Link>
        <section className="pt-2">
          <span className="flex justify-center text-sm font-bold text-purple-500 pb-2">
            CRM
          </span>
          <SidebarOpenButton
            icon={<User strokeWidth="1.5px" width={20} />}
            text="Clientes"
            color="purple-500"
            sectionName="costumers"
          >
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Adicionar"
              url="/crm/costumers/add"
            />

            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Pesquisar"
              url="/crm/costumers/search"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Lista"
              url="/crm/costumers/list"
            />
          </SidebarOpenButton>
          <SidebarOpenButton
            icon={<Megaphone strokeWidth="1.5px" width={20} />}
            text="Leads"
            color="purple-500"
            sectionName="leads"
          >
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Painel"
              url="crm/leads/dashboard"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Adicionar líder"
              url="crm/leads/add-lead"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Lista"
              url="crm/leads/list"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Cotas"
              url="crm/leads/quotes"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Mapa"
              url="crm/leads/maps"
            />
          </SidebarOpenButton>
          <SidebarOpenButton
            icon={<Ticket width={20} strokeWidth="1.5px" />}
            text="Tickets"
            color="purple-500"
            sectionName="tickets"
          >
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Painel"
              url="crm/tickets/dashboard"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Lista"
              url="crm/tickets/list"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Tickets fechados"
              url="crm/tickets/closed-tickets"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Arquivos"
              url="crm/tickets/archives"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Destinatários"
              url="crm/tickets/recipients"
            />
          </SidebarOpenButton>
          <SidebarOpenButton
            icon={<DollarSign width={20} strokeWidth="1.5px" />}
            text="Finanças"
            color="purple-500"
            sectionName="finance"
          >
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Painel"
              url="crm/finance/dashboard"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Transações"
              url="crm/finance/transactions"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Faturas"
              url="crm/finance/invoices"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Notas de crédito"
              url="crm/finance/credit-notes"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Faturas proforma"
              url="crm/finance/proforma-invoices"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Pagamentos"
              url="crm/finance/payments"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Histórico e visualização"
              url="crm/finance/history-and-preview"
            />
            <CollapsibleSidebarSubButton
              squareColor="bg-purple-500"
              text="Extratos"
              subSectionName="payment-statements"
            >
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-purple-500"
                text="Processando"
                url="crm/finance/payment-statements/processing"
              />
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-purple-500"
                text="Histórico"
                url="crm/finance/payment-statements/history"
              />
            </CollapsibleSidebarSubButton>
            <CollapsibleSidebarSubButton
              squareColor="bg-purple-500"
              text="Recargas de cartão"
              subSectionName="refill-cards"
            >
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-purple-500"
                text="Gerar"
                url="crm/finance/refill-cards/generate"
              />
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-purple-500"
                text="Séries"
                url="crm/finance/refill-cards/series"
              />
            </CollapsibleSidebarSubButton>
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Custos"
              url="crm/finance/costs"
            />
          </SidebarOpenButton>
          <SidebarOpenButton
            icon={<Mail width={20} strokeWidth="1.5px" />}
            text="Mensagens"
            color="purple-500"
            sectionName="messages"
          >
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Caixa de entrada"
              url="crm/messages/inbox"
            />
            <CollapsibleSidebarSubButton
              squareColor="bg-purple-500"
              text="Envio em massa"
              subSectionName="mass-sending"
            >
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-purple-500"
                text="Criar"
                url="crm/messages/mass-sending/create"
              />
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-purple-500"
                text="Histórico"
                url="crm/messages/mass-sending/history"
              />
            </CollapsibleSidebarSubButton>
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-purple-500"
              text="Novidades"
              url="crm/messages/news"
            />
          </SidebarOpenButton>
        </section>
        <section className="pt-2">
          <span className="flex justify-center text-sm font-bold text-green-400 pb-2">
            COMPANHIA
          </span>
          <SidebarOpenButton
            icon={<Calendar width={20} strokeWidth="1.5px" />}
            text="Agendamento"
            color="green-400"
            sectionName="scheduling"
          >
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Painel"
              url="company/scheduling/dashboard"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Projetos"
              url="company/scheduling/projects"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Tarefas"
              url="company/scheduling/tasks"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Calendários"
              url="company/scheduling/calendars"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Mapas"
              url="company/scheduling/maps"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Arquivo"
              url="company/scheduling/archive"
            />
          </SidebarOpenButton>
          <SidebarOpenButton
            icon={<Layers width={20} strokeWidth="1.5px" />}
            text="Inventário"
            color="green-400"
            sectionName="inventory"
          >
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Painel"
              url="company/inventory/dashboard"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Itens"
              url="company/inventory/items"
            />
            <SidebarSubButton
              marginLeft="ml-9"
              squareColor="bg-green-400"
              text="Produtos"
              url="company/inventory/products"
            />
            <CollapsibleSidebarSubButton
              squareColor="bg-green-400"
              text="Fornecimento"
              subSectionName="supply"
            >
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-green-400"
                text="Fornecedores"
                url="company/inventory/supply/suppliers"
              />
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-green-400"
                text="Vendedores"
                url="company/inventory/supply/vendors"
              />
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-green-400"
                text="Faturas de fornecedores"
                url="company/inventory/supply/supplier-invoices"
              />
            </CollapsibleSidebarSubButton>
            <CollapsibleSidebarSubButton
              squareColor="bg-green-400"
              text="Relatórios"
              subSectionName="reports"
            >
              <SidebarSubButton
                marginLeft="ml-12"
                squareColor="bg-green-400"
                text="Itens vendidos/alugados"
                url="company/inventory/reports/sold-and-rented-items"
              />
              <SidebarSubButton
                marginLeft="ml-14"
                squareColor="bg-green-400"
                text="Itens"
                url="company/inventory/reports/items"
              />
            </CollapsibleSidebarSubButton>
          </SidebarOpenButton>
        </section>
        <section className="pt-2">
          <span className="flex justify-center text-sm font-bold text-zinc-600 pb-2">
            SISTEMA
          </span>
          <Link href="/administration">
            <Button
              className={`w-full font-normal h-8 rounded-none flex justify-start gap-4  bg-neutral-50 text-slate-800 hover:text-white hover:bg-zinc-600 ${
                router.pathname === "/administration" &&
                "bg-zinc-600 text-white"
              }`}
            >
              <ShieldPlus strokeWidth="1.5px" width={20} /> Admin
            </Button>
          </Link>
          <Link href="/config">
            <Button
              className={`w-full font-normal h-8 rounded-none flex justify-start gap-4  bg-neutral-50 text-slate-800 hover:text-white hover:bg-zinc-600 ${
                router.pathname === "/config" && "bg-zinc-600 text-white"
              }`}
            >
              <SlidersHorizontal strokeWidth="1.5px" width={20} /> Configurações
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
