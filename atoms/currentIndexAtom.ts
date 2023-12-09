import {atom} from 'recoil';

export const currentIndexAtom = atom<number>({
  key: 'currentIndexAtom',
  default: 1
});