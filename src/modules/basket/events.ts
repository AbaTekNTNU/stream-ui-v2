import { Dispatch } from "redux";
import { AbaTekStreamingEvent, AbaTekStreamingEventType } from "../../types";
import { handleScoreEvent } from "./score/events";

export const handleBasketEvent = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  switch (event.type) {
    case AbaTekStreamingEventType.SCORE:
      handleScoreEvent(event, dispatch);
      break;
  }
};
