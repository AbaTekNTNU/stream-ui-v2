import { Dispatch } from "redux";
import { AbaTekStreamingEvent } from "../../../types";
import { setScore } from "./reducer";

export const handleScoreEvent = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  dispatch(
    setScore({
      home: (event as any).payload.home,
      away: (event as any).payload.away,
    })
  );
};
