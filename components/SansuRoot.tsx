'use client'
import {NextUIProvider} from "@nextui-org/react";
import {RecoilRoot} from "recoil";
import SansuLayout from "./SansuLayout";

const SansuRoot: React.FC = () => {
  return (
    <NextUIProvider>
      <RecoilRoot>
        <SansuLayout/>
      </RecoilRoot>
    </NextUIProvider>
  )
}

export default SansuRoot;