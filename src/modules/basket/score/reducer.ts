import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Team = {
  name: string;
};
export interface ScoreState {
  score: {
    home: number;
    away: number;
  };
  teams: {
    home: Team;
    away: Team;
  };
  clock: {
    secondsRemaining: number;
    period: string;
  };
  scoreVisible: boolean;
  clockVisible: boolean;
}

export type SetScoreRequest = {
  home: number;
  away: number;
};

export type ClockCorrectionRequest = {
  secondsRemaining: number;
  period: string;
};

const initialState: ScoreState = {
  score: {
    home: 0,
    away: 0,
  },
  teams: {
    home: {
      name: "NID",
    },
    away: {
      name: "MID",
    },
  },
  clock: {
    period: "1",
    secondsRemaining: 600,
  },
  scoreVisible: true,
  clockVisible: false,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    correctTime: (
      state: ScoreState,
      action: PayloadAction<ClockCorrectionRequest>
    ) => {
      state.clock = {
        secondsRemaining: action.payload.secondsRemaining,
        period: action.payload.period,
      };
      return state;
    },
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
export const { setScore, showScore, hideScore, correctTime } =
  scoreSlice.actions;

export default scoreSlice.reducer;
