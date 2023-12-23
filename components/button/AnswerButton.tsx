import DefaultButton from "./DefaultButton";
import * as React from "react";
import {EStatus, statusAtom} from "../../atoms/statusAtom";
import THistory from "../../types/THistory";
import {useRecoilState, useRecoilValue} from "recoil";
import {questionAtom} from "../../atoms/questionAtom";
import {answerAtom} from "../../atoms/answerAtom";
import {currentIndexAtom} from "../../atoms/currentIndexAtom";
import {historyAtom} from "../../atoms/historyAtom";

const AnswerButton = () => {
  const question = useRecoilValue(questionAtom);
  const [answer, setAnswer] = useRecoilState(answerAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexAtom);
  const [history, setHistory] = useRecoilState(historyAtom);

  const handleClick = () => {
    if (!answer) return;
    setStatus(EStatus.JUDGING);
    const his = {
      question: question,
      answer: answer,
      isCorrect: question.product === answer
    } as THistory;
    setHistory([...history, his]);
  }

  return (
    <DefaultButton text="けってい" variant="solid" value="answer" clazz="w-full" onClickButton={handleClick}/>
  )
}

export default AnswerButton;