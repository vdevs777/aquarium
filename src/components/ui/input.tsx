import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  doNotAcceptNumbers?: boolean;
  doNotAcceptLetters?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      doNotAcceptNumbers,
      doNotAcceptLetters,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        title={error == undefined || error.length <= 0 ? "" : error}
        className={cn(
          error == undefined || error.length <= 0
            ? "focus:ring-4 ring-input focus:border-primary flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
            : "border-destructive focus:ring-4 ring-input flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
          className
        )}
        onKeyDown={(event) => {
          const isLetter = /^[a-zA-Z]$/i.test(event.key);
          const isNumber = !isNaN(Number(event.key));
          if (doNotAcceptLetters && isLetter) {
            event.preventDefault();
          }
          if (doNotAcceptNumbers && isNumber && event.key !== " ") {
            event.preventDefault();
          }
        }}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
