import {Button} from "@nextui-org/react";
import * as React from "react";
import {useRecoilValue} from "recoil";
import {EStatus, statusAtom} from "../../atoms/statusAtom";

type TProps = {
  text: string | number,
  value: number | string,
  clazz?: string,
  color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger",
  variant?: "flat" | "ghost" | "solid" | "bordered" | "light" | "faded" | "shadow",
  onClickButton: (command: number | string) => void
}

const DefaultButton: React.FC<TProps> = ({
                                      text,
                                      value,
                                      clazz = '',
                                      color = 'primary',
                                      variant = 'flat',
                                      onClickButton
}) => {
  const status = useRecoilValue(statusAtom);
  const clazzName = "h-20 text-4xl " + clazz;
  return (
    <Button size="lg"
            isDisabled={value !== 'next' && status === EStatus.JUDGING}
            variant={variant}
            color={color}
            className={clazzName}
            value={value}
            onClick={() => onClickButton(value)}
    >{text}</Button>
  )
};

export default DefaultButton;