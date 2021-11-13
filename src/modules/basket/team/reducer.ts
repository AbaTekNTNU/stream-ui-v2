import { createSlice } from "@reduxjs/toolkit";

type Coach = {};

type Player = {};

type TeamDetail = {
  name: string;
  logo: string;
  coaches: Coach[];
  players: Player[];
};

type TeamState = {
  home: TeamDetail;
  away: TeamDetail;
  showGameSummary: boolean;
  showTeamPresentation: boolean;
};
const initialState: TeamState = {
  home: {
    name: "Nidaros Jets",
    logo: "/logos/nidaros_jets.png",
    players: [],
    coaches: [],
  },
  away: {
    name: "Asker Aliens",
    logo: "/logos/asker_aliens.png",
    players: [],
    coaches: [],
  },
  showGameSummary: false,
  showTeamPresentation: true,
};

const teamReducer = createSlice({
  name: "team",
  initialState,
  reducers: {
    showGameInitialSummary: (state: TeamState) => {
      state.showGameSummary = true;
      return state;
    },
    hideGameInitialSummary: (state: TeamState) => {
      state.showGameSummary = false;
      return state;
    },
  },
});

export const { showGameInitialSummary, hideGameInitialSummary } =
  teamReducer.actions;

export default teamReducer.reducer;
