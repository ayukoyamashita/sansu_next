'use client'
import {NextUIProvider} from "@nextui-org/react";
import {RecoilRoot} from "recoil";
import Result from "./Result";

const ResultRoot: React.FC = () => {
  return (
    <NextUIProvider>
      <RecoilRoot>
        <Result/>
      </RecoilRoot>
    </NextUIProvider>
  )
}

export default ResultRoot;