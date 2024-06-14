import Link from "next/link";
import { Button } from "../../ui/button";
import { useRouter } from "next/router";

interface SidebarSubButtonInterface {
  text: string;
  squareColor: string;
  marginLeft: string;
  url: string;
}

export function SidebarSubButton({
  text,
  squareColor,
  marginLeft,
  url,
}: SidebarSubButtonInterface) {
  const router = useRouter();
  const fixedUrl = url.startsWith("/") ? url : `/${url}`;
  const isActive = router.pathname === fixedUrl;

  return (
    <Link href={fixedUrl} passHref>
      <Button className="relative group w-full h-8 rounded-none flex justify-start gap-4  bg-[#FAFAFA] text-slate-800 hover:bg-zinc-200">
        <span className={`${marginLeft} font-normal`}>{text}</span>
        {isActive ? (
          <span
            className={`absolute right-0 h-full w-1 ${squareColor} opacity-100`}
          ></span>
        ) : (
          <span
            className={`absolute right-0 h-full w-1 ${squareColor} opacity-0 group-hover:opacity-100`}
          ></span>
        )}
      </Button>
    </Link>
  );
}
