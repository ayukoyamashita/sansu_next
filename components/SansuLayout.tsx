import {useEffect} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import Tenkey from "./Tenkey";
import Question from "./Question";
import Link from "next/link";
import {Cog6ToothIcon, XMarkIcon} from '@heroicons/react/24/solid';
import {questionAtom} from "../atoms/questionAtom";
import {EStatus, statusAtom} from "../atoms/statusAtom";
import {currentIndexAtom} from "../atoms/currentIndexAtom";
import {historyAtom} from "../atoms/historyAtom";
import {createQuestion} from "../ts/QuestionHelper";
import History from "./History";

const SansuLayout: React.FC = () => {
  const setQuestion = useSetRecoilState(questionAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexAtom);

  useEffect(() => {
    const question = createQuestion();
    setQuestion(question);
  }, [currentIndex]);

  return (
    <>
      <main className="lg:container p-6 mx-auto flex justify-between">
        <Question/>
        <Tenkey/>
      </main>
      <History />
    </>
  )
};

export default SansuLayout;