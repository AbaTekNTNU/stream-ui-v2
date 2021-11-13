import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Clock from "./Clock/Clock";
import Score from "./Score";

const ScoreView: React.FC = () => {
  const scoreState = useSelector((state: RootState) => state.score);
  const logoGender = useSelector((state: RootState) => state.firiLogo.gender);
  const showClock = useSelector((state: RootState) => state.score.clockVisible);

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
      {showClock && <Clock />}
    </div>
  );

  return scoreState.scoreVisible ? scoreApplication : null;
};

export default ScoreView;
