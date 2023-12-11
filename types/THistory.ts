import TQuestion from "./TQuestion";

type THistory = {
  question: TQuestion,
  answer: number | null,
  isCorrect: boolean,
}

export default THistory;
