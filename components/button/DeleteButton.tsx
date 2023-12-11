import DefaultButton from "./DefaultButton";
import * as React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {answerAtom} from "../../atoms/answerAtom";

const DeleteButton = () => {
  const [answer, setAnswer] = useRecoilState(answerAtom);


  const handleClick = () => {
    setAnswer(Math.floor((answer || 0) / 10));
  }

  return (
    <DefaultButton text="けす" value="delete" clazz="flex-1" onClickButton={handleClick}/>
  )
}

export default DeleteButton;