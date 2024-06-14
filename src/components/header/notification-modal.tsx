import { ReactNode } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { TicketCard } from "./ticket-card";

interface NotificationModalProps {
    children: ReactNode
}

export function NotificationModal({ children }: NotificationModalProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            
            <SheetContent>
                <SheetHeader className="justify-center flex">
                    <SheetTitle>Notificações</SheetTitle>
                    <button className="text-blue-500 flex items-end justify-end">Marcar todas como lidas</button>
                </SheetHeader>
                
                <div className="mt-4">
                    <TicketCard />
                </div>
            </SheetContent>
        </Sheet>
    )
}