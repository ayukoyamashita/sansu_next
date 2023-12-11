import {atom} from 'recoil';
import THistory from ".././types/THistory";

export const historyAtom = atom<THistory[] | []>({
  key: 'historyAtom',
  default: []
});