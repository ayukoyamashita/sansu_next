import * as React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import DefaultButton from "./button/DefaultButton";
import {questionAtom} from "../atoms/questionAtom";
import {answerAtom} from "../atoms/answerAtom";
import {EStatus, statusAtom} from "../atoms/statusAtom";
import {currentIndexAtom} from "../atoms/currentIndexAtom";
import {historyAtom} from "../atoms/historyAtom";
import THistory from "../types/THistory";
import NextButton from "./button/NextButton";
import AnswerButton from "./button/AnswerButton";
import DeleteButton from "./button/DeleteButton";
import ResultButton from "./button/ResultButton";
import {QUESTION_COUNT} from "../ts/Settings";

const Tenkey = () => {
  const question = useRecoilValue(questionAtom);
  const [answer, setAnswer] = useRecoilState(answerAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexAtom);
  const [history, setHistory] = useRecoilState(historyAtom);


  const handleNumberClick = (command: number) => {
    setAnswer((answer || 0) * 10 + command);
  };

  return (
    <div className="w-80">
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        {[...Array(9)].map((_, i) =>
          <DefaultButton text={i + 1} value={i + 1} key={i} onClickButton={() => handleNumberClick(i + 1)}/>
        )
        }
        <DefaultButton text={0} value={0} key={0} onClickButton={() => handleNumberClick(0)}/>
        <DeleteButton/>
      </div>
      <div className="tenkey_other">
        {status === EStatus.ANSWERING && <AnswerButton/>}
        {status === EStatus.JUDGING && currentIndex < QUESTION_COUNT && <NextButton/>}
        {status === EStatus.JUDGING && currentIndex === QUESTION_COUNT && <ResultButton/>}
      </div>
    </div>
  );
}

export default Tenkey;