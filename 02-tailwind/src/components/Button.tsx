import { useEffect } from "react";
import { cn } from "../lib/index"


interface IButton {
  colorType: "green" | "red" | "blue";
  setColorType(value: "green" | "red" | "blue"): void;

}



export default function Button({ colorType, setColorType }: IButton) {
  useEffect(() => {
    setColorType(colorType)
  }, [])

  return (
    <button className={cn(
      `bg-${colorType}-500 `,
      "border-[1px] p-4"
    )}>
      Button
    </button>
  )
}
