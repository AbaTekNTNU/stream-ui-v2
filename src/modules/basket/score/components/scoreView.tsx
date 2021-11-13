import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Score from "./Score";

const getUiTime = (secondsRemainging: number): string => {
  return `${Math.floor(secondsRemainging / 60)}:${secondsRemainging % 60}`;
};

const ScoreView: React.FC = () => {
  const scoreState = useSelector((state: RootState) => state.score);
  const logoGender = useSelector((state: RootState) => state.firiLogo.gender);

  const scoreApplication = (
    <div>
      <Score
        home={{
          name: scoreState.teams.home.name,
          score: scoreState.score.home,
        }}
        away={{
          name: scoreState.teams.away.name,
          score: scoreState.score.away,
        }}
        logoGender={logoGender}
      ></Score>
      Tid: {getUiTime(scoreState.clock.secondsRemaining)}
    </div>
  );

  return scoreState.scoreVisible ? scoreApplication : null;
};

export default ScoreView;
