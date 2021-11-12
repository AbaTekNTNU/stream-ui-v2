import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const ScoreView: React.FC = () => {
  const scoreState = useSelector((state: RootState) => state.score);

  return (
    <div>
      Hjemme: {scoreState.home}
      Borte: {scoreState.away}
    </div>
  );
};

export default ScoreView;
