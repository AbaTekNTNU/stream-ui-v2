import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Score from "./Score";

const getUiTime = (secondsRemainging: number): string => {
  return `${Math.floor(secondsRemainging / 60)}:${secondsRemainging % 60}`;
};

const ScoreView: React.FC = () => {
  const scoreState = useSelector((state: RootState) => state.score);

  const scoreApplication = (
    <div>
      <Score home={scoreState.score.home} away={scoreState.score.away}></Score>
      Hjemme: {scoreState.score.home}
      Borte: {scoreState.score.away}
      Periode: {scoreState.clock.period}
      Tid: {getUiTime(scoreState.clock.secondsRemaining)}
    </div>
  );

  return scoreState.scoreVisible ? scoreApplication : null;
};

export default ScoreView;
