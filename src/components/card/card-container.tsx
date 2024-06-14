import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function CardContainer({children}: Props) {
  return (
    <div className="grid xxs:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-x-5 gap-y-2">
      {children}
    </div>
  )
}