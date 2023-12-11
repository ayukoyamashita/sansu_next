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

    <div className="text-5xl text-stone-800">
      <header className="relative flex items-center justify-center h-20 bg-blue-500 text-4xl text-white">
        かけざん<XMarkIcon className="h-8 w-8"/>チャンレンジ
        <Link href="/settings" className="absolute right-5"><Cog6ToothIcon className="h-10 w-10"/></Link>
      </header>
      <main className="lg:container p-6 mx-auto flex justify-between">
        <Question/>
        <Tenkey/>
      </main>
      <History />

    </div>
  )
};

export default SansuLayout;