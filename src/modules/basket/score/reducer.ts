import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScoreState {
  home: number;
  away: number;
}

export type SetScoreRequest = {
  home: number;
  away: number;
};

const initialState: ScoreState = {
  home: 0,
  away: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setScore: (state: ScoreState, action: PayloadAction<SetScoreRequest>) => {
      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScore } = scoreSlice.actions;

export default scoreSlice.reducer;
