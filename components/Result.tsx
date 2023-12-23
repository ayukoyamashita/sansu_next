import {Button, Chip, Link} from "@nextui-org/react";
import * as React from "react";
import THistory from "../types/THistory";
import {useEffect, useState} from "react";

import Score0Image from "../images/score0.png";
import Score10Image from "../images/score10.png";
import Score20Image from "../images/score20.png";
import Score30Image from "../images/score30.png";
import Score40Image from "../images/score40.png";
import Score50Image from "../images/score50.png";
import Score60Image from "../images/score60.png";
import Score70Image from "../images/score70.png";
import Score80Image from "../images/score80.png";
import Score90Image from "../images/score90.png";
import Score100Image from "../images/score100.png";

import commentVeryGoodImage from "../images/comment_verygood.png";
import commentGoodImage from "../images/comment_good.png";
import commentFightImage from "../images/comment_fight.png";

const Result = () => {
  const [history, setHistory] = useState([])
  let [correctNum, setCorrectNum] = useState(0);
  const scoreImages = [
    Score0Image,
    Score10Image,
    Score20Image,
    Score30Image,
    Score40Image,
    Score50Image,
    Score60Image,
    Score70Image,
    Score80Image,
    Score90Image,
    Score100Image,
  ];

  useEffect(() => {
    const result = localStorage.getItem('result');
    if (result) {
      const parsed = JSON.parse(result);
      setHistory(parsed);
      setCorrectNum(parsed.filter((his: THistory) => his.isCorrect).length);
    }
  }, []);

  const commentImage = () => {
    if (correctNum === 10) {
      return commentVeryGoodImage;
    } else if (5 <= correctNum && correctNum < 10) {
      return commentGoodImage;
    } else {
      return commentFightImage;
    }
  }

  return (
    <main className="lg:container p-6 mx-auto text-center">
      {history.length > 0 && (
        <>
          <p className="mt-10">
            <img src={scoreImages[correctNum].src} alt={`${correctNum * 10}点`} className="m-auto h-56" />
          </p>
          <p className="mb-10">
            <img src={commentImage().src} alt="" className="m-auto h-16" />
          </p>

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
        <Button href="./" as={Link} color="primary" size="lg">もういちどチャレンジ</Button>
      </div>
    </main>
  )
}

export default Result;