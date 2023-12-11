import * as React from "react";
import DefaultButton from "./DefaultButton";
import {EStatus, statusAtom} from "../../atoms/statusAtom";
import {useRecoilState} from "recoil";
import {answerAtom} from "../../atoms/answerAtom";
import {currentIndexAtom} from "../../atoms/currentIndexAtom";

const NextButton: React.FC = () => {
  const [answer, setAnswer] = useRecoilState(answerAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexAtom);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
    setStatus(EStatus.ANSWERING);
    setAnswer(null);
  }

  return (
    <DefaultButton text="つぎへ" color="success" variant="solid" value="next" clazz="w-full"
                   onClickButton={handleClick}/>
  )
}

export default NextButton;