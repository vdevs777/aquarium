import { CardContainer } from "@/components/card/card-container";
import { CardItem } from "@/components/card/card-item";
import { PageHeader } from "@/components/page-header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TooltipProvider,
  Tooltip as TooltipContainer,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Calculator,
  DollarSign,
  HelpCircle,
  NotepadText,
  NotepadTextDashed,
  Scroll,
  ScrollText,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  LegendProps,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { COLORS1, COLORS2, data1, data2, data3, data4 } from "../../../others/data";

export default function Dashboard() {
  return (
    <div className="pr-4">
      <PageHeader path="Finanças /" title="Painel" icon={<DollarSign />} />

      <CardContainer>
        <CardItem
          title="Pagamentos"
          details="5.300,00$"
          icon={<Scroll size={20} className="text-green-500" />}
          number={7}
          color="text-green-500"
        />
        <CardItem
          title="Faturas pagas"
          details="5.100,00$"
          icon={<NotepadText size={20} className="text-blue-500" />}
          number={6}
          color="text-blue-500"
        />
        <CardItem
          title="Faturas não pagas"
          details="23.000,00$"
          icon={<NotepadTextDashed size={20} className="text-yellow-500" />}
          number={4}
          color="text-yellow-500"
        />
        <CardItem
          title="Notas de crédito"
          details="0,00$"
          icon={<ScrollText size={20} className="text-red-500" />}
          number={0}
          color="text-red-500"
        />
      </CardContainer>
      <div className="grid xs:grid-cols-3 grid-cols-1 gap-3 mt-7">
        <Table className="sm:w-[33rem] w-[33rem] bg-white">
          <TableHeader>
            <TableRow>
              <TableHead className="w-full flex flex-row items-center gap-2 font-semibold text-black">
                <Calculator size={18} /> Mês passado
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Pagamentos</TableCell>
              <TableCell className="text-right">0 ($0,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Faturas pagas</TableCell>
              <TableCell className="text-right">0 ($0,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Faturas não pagas</TableCell>
              <TableCell className="text-right">0 ($0,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Notas de crédito</TableCell>
              <TableCell className="text-right">0 ($0,00)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table className="sm:w-[33rem] w-[33rem] bg-white">
          <TableHeader>
            <TableRow>
              <TableHead className="w-full flex flex-row items-center gap-2 font-semibold text-black">
                <Calculator size={18} /> Mês atual
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Pagamentos</TableCell>
              <TableCell className="text-right">7 ($5.300,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Faturas pagas</TableCell>
              <TableCell className="text-right">6 ($5.100,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Faturas não pagas</TableCell>
              <TableCell className="text-right">4 ($23.000,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Notas de crédito</TableCell>
              <TableCell className="text-right">0 ($0,00)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table className=" sm:w-[33rem] w-[33rem] bg-white">
          <TableHeader>
            <TableRow>
              <TableHead className="w-full flex flex-row items-center gap-2 font-semibold text-black">
                <Calculator size={18} />
                Mês que vem
                <TooltipProvider>
                  <TooltipContainer>
                    <TooltipTrigger>
                      <HelpCircle size={18} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white">
                      <p className="text-xs">
                        Importante! Estes são cálculos <br /> preliminares para
                        o próximo mês, <br /> podem variar dependendo das <br />
                        condições.
                      </p>
                    </TooltipContent>
                  </TooltipContainer>
                </TooltipProvider>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Transações de débito
              </TableCell>
              <TableCell className="text-right">10 ($4650,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Transações de crédtio
              </TableCell>
              <TableCell className="text-right">0 ($0,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Faturas</TableCell>
              <TableCell className="text-right">10 ($4650,00)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Faturas pró-formas</TableCell>
              <TableCell className="text-right">0 ($0,00)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-5">
        <div className="sm:w-full bg-white p-4">
          <div className="flex flex-row items-center gap-2">
            <Calculator fontWeight="regular" size={20} />
            <h5 className="font-semibold">
              Faturamento por período (IVA incluído)
            </h5>
          </div>
          <div className="bg-white mt-5 w-auto sm:w-full h-[28.125rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                className="w-full h-[28.125rem]"
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" className="text-xs " />
                <YAxis className="text-xs" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pago"
                  fill="#5db85c"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="não pago"
                  fill="#d95450"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
                <Bar
                  dataKey="pago na hora"
                  fill="#FFCD56"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="sm:w-full bg-white p-4 mt-5 sm:mt-0">
          <div className="flex flex-row items-center gap-2">
            <Calculator fontWeight="regular" size={20} />
            <h5 className="font-semibold">
              Pagamento por período (IVA incluído)
            </h5>
          </div>
          <div className="bg-white mt-5 w-auto sm:w-full h-[28.125rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                className="w-full h-[28.125rem]"
                data={data2}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Legend />
                <Bar dataKey="dinheiro" stackId="a" fill="#428BCA" />
                <Bar dataKey="cartão de crédito" stackId="a" fill="#5DB85C" />
                <Bar dataKey="paypal" stackId="a" fill="#5AC0DE" />
                <Bar
                  dataKey="transferência bancária"
                  stackId="a"
                  fill="#D95450"
                />
                <Bar dataKey="outros" stackId="a" fill="#F1AE4E" />
                <Bar dataKey="cartão pré-pago" stackId="a" fill="#3949AB" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-5">
        <div className="sm:w-full bg-white p-4">
          <div className="flex flex-row items-center gap-2">
            <Calculator fontWeight="regular" size={20} />
            <h5 className="font-semibold">Top 10 pagadores</h5>
          </div>
          <div className="bg-white mt-5 w-auto sm:w-full h-[28.125rem] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart className="flex flex-row">
                <Pie
                  data={data3}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius="80%"
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data3.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS1[index % COLORS1.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="sm:w-full bg-white p-4">
          <div className="flex flex-row items-center gap-2">
            <Calculator fontWeight="regular" size={20} />
            <h5 className="font-semibold">Top 10 pagadores</h5>
          </div>
          <div className="bg-white mt-5 w-auto sm:w-full h-[28.125rem] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart className="flex flex-row">
                <Pie
                  data={data4}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius="80%"
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data3.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS2[index % COLORS2.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
