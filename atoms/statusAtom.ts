import {atom} from 'recoil';

export enum EStatus {
  ANSWERING,
  JUDGING,
}
export const statusAtom = atom<EStatus>({
  key: 'statusAtom',
  default: EStatus.ANSWERING
});
