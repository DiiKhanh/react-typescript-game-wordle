export interface boardState {
  board: string[];
  pos: number;
  row: number;
  correctWord: string;
}

export default interface rootState {
  board: boardState;
}
