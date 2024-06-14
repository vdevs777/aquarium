import { ReactNode, useState } from "react";
import { Button, buttonVariants } from "../../ui/button";
import { VariantProps } from "class-variance-authority";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/router";

interface ColorVariants {
    [key: string]: string;
}

interface SidebarOpenButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    text: string;
    icon: ReactNode;
    color: string;
    sectionName: string;
}

export function SidebarOpenButton({
    text,
    icon,
    color,
    children,
    sectionName,
}: SidebarOpenButtonProps) {
    const router = useRouter();
    const path = router.pathname.split("/")[2];
    const [isSubButtonsVisible, setSubButtonsVisible] = useState(false);

    const toggleSubButtons = () => {
        setSubButtonsVisible(!isSubButtonsVisible);
    };

    const colorVariants: ColorVariants = {
        'purple-500': 'bg-slate-50 hover:bg-purple-500',
        'green-400': 'bg-slate-50 hover:bg-green-400'
    }

    return (
        <>
            <Button
                className={`w-full h-8 rounded-none flex justify-between hover:text-white text-${color} group ${path === sectionName ? `bg-${color} hover:bg-${color}` : `${colorVariants[color]}`
                    }`}
                onClick={toggleSubButtons}
            >
                <div
                    className="flex items-center gap-4">
                    {icon && (
                        <span
                            className={`group-hover:text-white ${path === sectionName && "text-white"
                                }`}
                        >
                            {icon}
                        </span>
                    )}
                    <span
                        className={`text-gray-900 group-hover:text-white ${path === sectionName && `text-white`
                            } ${isSubButtonsVisible ? "font-bold" : "font-normal"
                            }`}
                    >
                        {text}
                    </span>
                </div>
                <div className="ml-auto">
                    {!isSubButtonsVisible && (
                        <ChevronDown
                            className={`group-hover:text-white ${path === sectionName ? "text-white" : "text-gray-600"
                                }`}
                            width={16}
                        />
                    )}
                    {isSubButtonsVisible && (
                        <ChevronUp
                            className={`group-hover:text-white ${path === sectionName ? "text-white" : "text-gray-600"
                                }`}
                            width={16}
                        />
                    )}
                </div>
            </Button>
            {isSubButtonsVisible && <>{children}</>}
        </>
    );
}
