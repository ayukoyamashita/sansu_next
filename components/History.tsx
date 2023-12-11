import {useRecoilValue} from "recoil";
import {historyAtom} from "../atoms/historyAtom";
import {QUESTION_COUNT} from "../ts/Settings";

const History: React.FC = () => {
  const hintHistory = useRecoilValue(historyAtom);

  const historyJudge = (i: number) => {
    if (!hintHistory[i]) return;

    if (hintHistory[i].isCorrect) {
      return <img src="maru.png" alt="正解" className="m-auto w-12"/>;
    } else {
      return <img src="batsu.png" alt="不正解" className="m-auto w-12"/>;
    }
  };

  return (
    <aside className="fixed bottom-0 w-full bg-slate-100">
      <ol className="flex justify-between p-4 text-xl text-slate-300">
        {[...Array(QUESTION_COUNT - 1)].map((_, i) =>
          <li className="flex-1 text-center h-20 border-r-4 border-slate-300 border-dotted" key={i}>
            {i + 1}<br/>
            {historyJudge(i)}
          </li>
        )}
        <li className="flex-1 text-center h-20" key={QUESTION_COUNT}>
          {QUESTION_COUNT}<br/>
          {historyJudge(QUESTION_COUNT - 1)}
        </li>
      </ol>
    </aside>
  )
}

export default History;