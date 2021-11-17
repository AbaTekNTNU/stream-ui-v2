import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import TeamPresentationComponent from "./component/TeamPresentationComponent";

const TeamPresentation: React.FC = () => {
  const showTeamPresentation = useSelector(
    (state: RootState) => state.team.showTeamPresentation
  );

  return showTeamPresentation ? <TeamPresentationComponent /> : null;
};

export default TeamPresentation;
