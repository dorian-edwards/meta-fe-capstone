import { ReactNode } from "react"

export default function ButtonPrimary({
  children,
  type,
  sx,
}: {
  children: ReactNode
  type?: "submit" | "button"
  sx?: React.CSSProperties
}) {
  return (
    <button
      className="text-lead bg-primary-yellow rounded-3xl py-[1rem] px-[2rem]"
      type={type || "button"}
      style={sx}
    >
      {children}
    </button>
  )
}
