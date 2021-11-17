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
  showTeamSummary: boolean;
  showTeamPresentation: boolean;
};
const initialState: TeamState = {
  home: {
    name: "Midtbyen basket",
    logo: "/logos/midtbyen.png",
    players: [],
    coaches: [],
  },
  away: {
    name: "Tromsø Strom Ungdom",
    logo: "/logos/tromso_kvinner.png",
    players: [],
    coaches: [],
  },
  showTeamSummary: false,
  showTeamPresentation: true,
};

const teamReducer = createSlice({
  name: "team",
  initialState,
  reducers: {
    showTeamInitialSummary: (state: TeamState) => {
      state.showTeamSummary = true;
      return state;
    },
    hideGameInitialSummary: (state: TeamState) => {
      state.showTeamSummary = false;
      return state;
    },
    showTeamInformation: (state: TeamState) => {
      state.showTeamPresentation = true;
      return state;
    },
    hideTeamInformation: (state: TeamState) => {
      state.showTeamPresentation = false;
      return state;
    },
  },
});

export const {
  showTeamInitialSummary,
  hideGameInitialSummary,
  showTeamInformation,
  hideTeamInformation,
} = teamReducer.actions;

export default teamReducer.reducer;
