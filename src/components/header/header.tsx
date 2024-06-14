import {
  Bell,
  ChevronDown,
  ChevronLeft,
  LogOut,
  MessageCircleQuestion,
  NotepadText,
  Plus,
  Search,
  UserRound,
} from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { NotificationModal } from "./notification-modal";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-12 bg-white flex flex-row justify-between drop-shadow-sm">
      <div className="flex flex-row items-center">
        <Button
          variant="ghost"
          className="hover:bg-slate-300 hover:text-blue-400"
        >
          <ChevronLeft width={24} strokeWidth="1.5px" />
        </Button>
        <Image src="/aquarium.png" alt="Logo" width={177} height={44}/>
      </div>
      <div className="flex items-center font-normal flex-row-reverse gap-4">
        <Popover>
          <PopoverTrigger asChild className="hover: cursor-pointer gap-2">
            <div className="flex flex-row items-center hover:text-blue-400 gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png" />
              </Avatar>
              <span className="flex flex-row items-center text-sm text-slate-600 hover:text-blue-500">
                Main Admin <ChevronDown strokeWidth="1.5px" width={17} />
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="h-auto w-auto p-0 bg-white">
            <div className="flex flex-row justify-center pt-2 gap-4">
              <Avatar>
                <AvatarImage src="https://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png" />
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-bold">admin</p>
                <p className="text-sm text-gray-600">Super Administrator</p>
              </div>
            </div>
            <div className="flex flex-col start">
              <Button
                variant="ghost"
                className="w-[210px] justify-start items-center rounded-none hover:bg-blue-100 gap-2 h-9"
              >
                <UserRound strokeWidth="1.5px" width={20} /> Perfil
              </Button>
              <Button
                variant="ghost"
                className="w-auto justify-start items-center rounded-none hover:bg-blue-100 gap-2 h-9"
              >
                <LogOut strokeWidth="1.5px" width={20} /> Sair
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <div className="flex items-center flex-row-reverse gap-4">
          <NotificationModal>
            <Button
              variant="ghost"
              className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
            >
              <Bell strokeWidth="1.5px" width={20} />
            </Button>
          </NotificationModal>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <NotepadText strokeWidth="1.5px" width={20} />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <MessageCircleQuestion strokeWidth="1.5px" width={20} />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <Search strokeWidth="1.5px" width={20} />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <Plus strokeWidth="1.5px" width={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
