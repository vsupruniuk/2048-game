import { AnyAction } from 'redux';

const SET_GAME_DATA = 'SET_GAME_DATA';

type GameRow = number[] | null[];

export type GameDataState = {
  gameData: GameRow[];
};

const initialState: GameDataState = {
  gameData: [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ],
};

export const selectors = {
  getGameData: (state: GameDataState) => state.gameData,
};

export const actions = {
  setGameData: (gameData: GameRow[]) => ({ type: SET_GAME_DATA, gameData }),
};

const gameDataReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_GAME_DATA:
      return {
        ...state,
        gameData: action.gameData,
      };

    default:
      return state;
  }
};

export default gameDataReducer;
