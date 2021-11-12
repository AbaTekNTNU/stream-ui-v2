import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScoreState {
  score: {
    home: number;
    away: number;
  };
  clock: {
    secondsRemaining: number;
    period: number;
  };
  scoreVisible: boolean;
  clockVisible: boolean;
}

export type SetScoreRequest = {
  home: number;
  away: number;
};

const initialState: ScoreState = {
  score: {
    home: 0,
    away: 0,
  },
  clock: {
    period: 1,
    secondsRemaining: 600,
  },
  scoreVisible: false,
  clockVisible: false,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    hideScore: (state: ScoreState) => {
      state.scoreVisible = false;
      return state;
    },
    showScore: (state: ScoreState) => {
      state.scoreVisible = true;
      return state;
    },
    setScore: (state: ScoreState, action: PayloadAction<SetScoreRequest>) => {
      state.score = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScore, showScore, hideScore } = scoreSlice.actions;

export default scoreSlice.reducer;
