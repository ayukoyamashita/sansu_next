import {Button, Chip, Link} from "@nextui-org/react";
import * as React from "react";
import THistory from "../types/THistory";
import {useEffect, useState} from "react";

const Result = () => {
  const [history, setHistory] = useState([])
  let [correctNum, setCorrectNum] = useState(0);

  useEffect(() => {
    const result = localStorage.getItem('result');
    if (result) {
      const parsed = JSON.parse(result);
      setHistory(parsed);
      setCorrectNum(parsed.filter((his: THistory) => his.isCorrect).length);
    }
  }, []);

  return (
    <main className="lg:container p-6 mx-auto text-center">
      {history.length > 0 && (
        <>
          <p className="mb-10">{correctNum * 10}点</p>

          <ol className="inline-block">
            {history.map((his: THistory, i: number) => (
              <li key={i} className="flex items-center py-2 px-10 text-3xl border-b-2 border-dotted">
                <Chip color="primary" className="mr-5 text-sm" variant="flat">{i + 1}</Chip>
                <div className="mr-5">{his.question.multiplicand} x {his.question.multiplier} =</div>
                <div className="relative">
                  <span
                    className="inline-block mr-3 w-20 h-14 border-2 rounded-2xl py-1 text-center">{his.answer}</span>
                  <span className="text-rose-500">{his.question.product}</span>
                  {his.isCorrect ? (
                    <img src="maru.png" alt="正解"
                         className="w-20 absolute top-1/2 left-0 -translate-y-1/2 max-w-none opacity-50"/>
                  ) : (
                    <img src="batsu.png" alt="不正解"
                         className="w-20 absolute top-1/2 left-0 -translate-y-1/2 max-w-none opacity-50"/>
                  )}

                </div>
              </li>
            ))}
          </ol>
        </>
      )}

      <div>
        <Button href="/" as={Link} color="primary" size="lg">もういちどチャレンジ</Button>
      </div>
    </main>
  )
}

export default Result;