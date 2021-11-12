import { Dispatch } from "redux";
import { AbaTekStreamingEvent } from "../../../types";
import { hideScore, setScore, showScore } from "./reducer";

enum AbatekMessage {
  CONTROL = "control",
  APPLICATION = "application",
}

enum ScoreEventControlMessages {
  SCORE_VISIBILITY = "score_visibility",
  CLOCK_VISIBILITY = "clock_visibility",
}

enum ScoreEventApplicationMessage {
  START_CLOCK = "clock.start",
  STOP_CLOCK = "clock.stop",
  UPDATE_SCORE = "scoreUpdate",
}

// enum ScoreEventControlPayload {
//   SHOW,
//   HIDE,
// }

const handleScoreVisibility = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  if ((event as any).payload.value) {
    dispatch(showScore());
  } else {
    dispatch(hideScore());
  }
};

const handleScoreUpdateEvent = (
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

const handleScoreApplicationMessage = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  switch ((event as any).payload.event) {
    case ScoreEventApplicationMessage.UPDATE_SCORE:
      handleScoreUpdateEvent(event, dispatch);
      break;
  }
};

export const handleScoreControllMessage = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  switch ((event as any).payload.control) {
    case ScoreEventControlMessages.SCORE_VISIBILITY:
      handleScoreVisibility(event, dispatch);
      break;
  }
};

export const handleScoreEvent = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  switch ((event as any).payload.type) {
    case AbatekMessage.APPLICATION:
      handleScoreApplicationMessage(event, dispatch);
      break;
    case AbatekMessage.CONTROL:
      handleScoreControllMessage(event, dispatch);
      break;
  }
};
