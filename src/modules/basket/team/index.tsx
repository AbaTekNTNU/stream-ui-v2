import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import GamePresentation from "./GamePresentation";

const Team: React.FC = () => {
  const showTeamSummary = useSelector(
    (state: RootState) => state.team.showTeamSummary
  );

  return showTeamSummary ? <GamePresentation /> : null;
};
export default Team;
