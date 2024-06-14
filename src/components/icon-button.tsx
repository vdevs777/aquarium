import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={`border border-slate-200 bg-background hover:bg-accent hover:text-accent-foreground rounded-md p-1.5 ${
        props.disabled ? "opacity-50" : null
      }`}
    />
  );
}
