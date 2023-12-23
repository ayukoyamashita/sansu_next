import * as React from "react";
import {EStatus, statusAtom} from "../../atoms/statusAtom";
import {useRecoilState, useRecoilValue} from "recoil";
import {answerAtom} from "../../atoms/answerAtom";
import {currentIndexAtom} from "../../atoms/currentIndexAtom";
import {Button, Link} from "@nextui-org/react";
import {historyAtom} from "../../atoms/historyAtom";

const ResultButton: React.FC = () => {
  const [answer, setAnswer] = useRecoilState(answerAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexAtom);
  const history = useRecoilValue(historyAtom);

  const saveResult = () => {
    localStorage.setItem('result', JSON.stringify(history));
    location.href = 'result';
  }

  return (
    <Button onClick={saveResult} size="lg" variant="solid" color="success" className="h-20 text-4xl w-full">けっかはっぴょう</Button>
  )
}

export default ResultButton;