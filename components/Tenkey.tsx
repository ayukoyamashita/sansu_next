import * as React from "react";
import MyButton from "./MyButton";

function Tenkey() {

  return (
    <div className="w-80">
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        {[...Array(9)].map((v, i) =>
          <MyButton text={i + 1} value={i + 1} key={i} />
          )
        }
        <MyButton text={0} value={0} key={0} />
        <MyButton text="けす" value="delete" clazz="flex-1" />
      </div>
      <div className="tenkey_other">
        <MyButton text="けってい" value="answer" clazz="w-full" />
      </div>
    </div>
  );
}

export default Tenkey;