import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const ScoreView: React.FC = () => {
  const scoreState = useSelector((state: RootState) => state.score);

  const scoreApplication = (
    <div>
      Hjemme: {scoreState.score.home}
      Borte: {scoreState.score.away}
    </div>
  );

  return scoreState.scoreVisible ? scoreApplication : null;
};

export default ScoreView;