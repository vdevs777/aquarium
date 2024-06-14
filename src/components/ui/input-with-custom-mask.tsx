import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import InputMask from "react-input-mask";

type Props = {
  mask: string;
  placeholder?: string;
  className?: string;
  error?: string | undefined;
};

export const InputWithCustomMask = forwardRef<HTMLInputElement, Props>(
  ({ mask, className, placeholder, error, ...rest }, ref) => {
    return (
      <InputMask
        mask={mask}
        className={cn( error == undefined || error.length <= 0
          ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
          : "border-destructive focus:ring-4 ring-input flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
          className
          )}
          placeholder={placeholder}
          inputRef={ref}
          title={cn(error == undefined || error.length <= 0 ? "" : error)}
        {...rest}
      />
    );
  }
);