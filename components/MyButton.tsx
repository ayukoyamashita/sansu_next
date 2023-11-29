import {Button} from "@nextui-org/react";
import * as React from "react";

type TProps = {
  text: string | number,
  value: string | number,
  clazz?: string
}

const MyButton: React.FC<TProps> = ({text, value, clazz = ''}) => {
  const clazzName = "h-20 text-4xl " + clazz;
  return (
    <Button size="lg" color="primary" className={clazzName} value={value}>{text}</Button>
  )
};

export default MyButton;