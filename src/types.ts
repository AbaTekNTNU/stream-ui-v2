export enum AbaTekStreamingModule {
  BASKET = "basket",
}

export enum AbaTekStreamingEventType {
  SCORE = "score",
  FIRI_LOGO_EVENT = "firi_logo",
}

export type AbaTekStreamingEvent = {
  module: AbaTekStreamingModule;
  type: AbaTekStreamingEventType;
};
