import * as React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import MyButton from "./MyButton";
import {questionAtom} from "../atoms/questionAtom";
import {answerAtom} from "../atoms/answerAtom";
import {EStatus, statusAtom} from "../atoms/statusAtom";
import {currentIndexAtom} from "../atoms/currentIndexAtom";
import {historyAtom} from "../atoms/historyAtom";
import THistory from "../ types/THistory";

function Tenkey() {
  const question = useRecoilValue(questionAtom);
  const [answer, setAnswer] = useRecoilState(answerAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexAtom);
  const [history, setHistory] = useRecoilState(historyAtom);


  const handleNumberClick = (command: number | 'delete' | 'answer' | 'next') => {
    if (command === 'delete') {
      setAnswer(Math.floor((answer || 0) / 10));
    } else if (command === 'answer') {
      setStatus(EStatus.JUDGING);
      const his = {
        question: question,
        answer: answer,
        isCorrect: question.product === answer
      } as THistory;
      setHistory([...history, his]);
    } else if (command === 'next') {
      setCurrentIndex(currentIndex + 1);
      setStatus(EStatus.ANSWERING);
      setAnswer(null);
    } else {
      setAnswer((answer || 0) * 10 + command);
    }
  };

  return (
    <div className="w-80">
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        {[...Array(9)].map((_, i) =>
          <MyButton text={i + 1} value={i + 1} key={i} onClickButton={handleNumberClick}/>
        )
        }
        <MyButton text={0} value={0} key={0} onClickButton={handleNumberClick}/>
        <MyButton text="けす" value="delete" clazz="flex-1" onClickButton={handleNumberClick}/>
      </div>
      <div className="tenkey_other">
        {status === EStatus.ANSWERING && <MyButton text="けってい" variant="solid" value="answer" clazz="w-full" onClickButton={handleNumberClick}/>}
        {status === EStatus.JUDGING && <MyButton text="つぎへ" color="success" variant="solid" value="next" clazz="w-full" onClickButton={handleNumberClick}/>}
      </div>
    </div>
  );
}

export default Tenkey;