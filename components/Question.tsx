import {useRecoilValue, useRecoilState} from "recoil";
import {BookOpenIcon} from '@heroicons/react/24/solid';
import {questionAtom} from "../atoms/questionAtom";
import {EStatus, statusAtom} from "../atoms/statusAtom";
import {answerAtom} from "../atoms/answerAtom";
import {currentIndexAtom} from "../atoms/currentIndexAtom";
import TQuestion from "../ types/TQuestion";

const Question = () => {
  const question = useRecoilValue(questionAtom);
  const status = useRecoilValue(statusAtom);
  const answer = useRecoilValue(answerAtom);
  const currentIndex = useRecoilValue(currentIndexAtom);

  return (
    <div className="flex-1 text-7xl">
      <div className="flex h-full flex-wrap items-center ml-10">
        <div>
          <p className=" text-4xl mb-8"><BookOpenIcon className="inline-block align-sub mr-3 text-blue-500 h-10 w-10"/>もんだい{currentIndex}
          </p>
          <div className="flex items-center">
            <p className="inline-block mr-4">{question.multiplicand} × {question.multiplier} = </p>
            <div className="relative inline-block w-52 h-28 border-4 rounded-2xl py-4 px-7 text-center">{answer}
              {status === EStatus.JUDGING && <Judge question={question} answer={answer}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

type TJudgeProps = {
  question: TQuestion,
  answer: number | null
}

const Judge: React.FC<TJudgeProps> = ({question, answer}) => {
  const isCorrect = question.product === answer;
  return (
    <>
      {isCorrect ?
        (
          <img src="maru.png" alt="正解"
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none w-64 opacity-50"/>
        ) : (
          <>
            <img src="batsu.png" alt="不正解"
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none w-64 opacity-50"/>
            <span className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-rose-500">{question.product}</span>
          </>
        )
      }
    </>
  )
}

export default Question;