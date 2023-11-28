'use client'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

function Tenkey() {

  return (
    <NextUIProvider>
      <div className="text-2xl">
        <div className="tenkey_numbers">
          {[...Array(9)].map((v, i) => <Button className="key" key={i + 1}
                                               value={i + 1}>{i + 1}</Button>)}
          <Button color="default" key={0} value={0}>{0}</Button>
        </div>
        <div className="tenkey_other">
          <Button className="delete" value="x">けす</Button>
          <Button className="answer" value="answer">けってい</Button>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default Tenkey;