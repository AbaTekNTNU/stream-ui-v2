import { Dispatch } from "redux";
import { AbaTekStreamingEvent } from "../../../types";
import { AbatekMessage } from "../events";
import { hideGameInitialSummary, showGameInitialSummary } from "./reducer";

enum GameEventMessage {
  GAME_INITIAL_SUMMARY = "game.initial.summary",
}

const handleGameEventControl = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  switch ((event as any).payload.control) {
    case GameEventMessage.GAME_INITIAL_SUMMARY:
      if ((event as any).payload.value) {
        dispatch(showGameInitialSummary());
      } else {
        dispatch(hideGameInitialSummary());
      }
  }
};

export const handleGameEvent = (
  event: AbaTekStreamingEvent,
  dispatch: Dispatch
) => {
  switch ((event as any).payload.type) {
    case AbatekMessage.CONTROL:
      handleGameEventControl(event, dispatch);
      break;
  }
};
