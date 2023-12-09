import {atom} from 'recoil';

export const answerAtom = atom<number | null>({
  key: 'answerAtom',
  default: null
});