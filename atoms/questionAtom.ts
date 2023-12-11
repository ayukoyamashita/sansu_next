import {atom} from 'recoil';
import TQuestion from ".././types/TQuestion";

export const questionAtom = atom<TQuestion>({
  key: 'questionAtom',
  default: {
    multiplicand: 0,
    multiplier: 0,
    product: 0
  }
});