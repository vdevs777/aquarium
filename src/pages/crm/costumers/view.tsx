import { useRouter } from "next/router";
import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";
import { customers } from "@/data/customers";

export default function View() {
  const router = useRouter();
  const { id } = router.query;

  const customerId = typeof id === "string" ? id : "";

  const findCustomerById = (id: string) => {
    return customers.find((customer) => customer.id === id);
  };

  const customer = customerId ? findCustomerById(customerId) : null;

  return (
    <div>
      <PageHeader
        path="Clientes / Lista"
        title={customer?.nome || ""}
        icon={<User />}
      />
      
    </div>
  );
}
