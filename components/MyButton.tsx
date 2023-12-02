import {Button} from "@nextui-org/react";
import * as React from "react";

type TProps = {
  text: string | number,
  value: string | number,
  clazz?: string,
  color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger",
  variant?: "flat" | "ghost" | "solid" | "bordered" | "light" | "faded" | "shadow"
}

const MyButton: React.FC<TProps> = ({text, value, clazz = '', color = 'primary', variant = 'flat'}) => {
  const clazzName = "h-20 text-4xl " + clazz;
  return (
    <Button size="lg" variant={variant} color={color} className={clazzName} value={value}>{text}</Button>
  )
};

export default MyButton;