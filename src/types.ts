export enum AbaTekStreamingModule {
  BASKET = "basket",
}

export enum AbaTekStreamingEventType {
  SCORE = "score",
}

export type AbaTekStreamingEvent = {
  module: AbaTekStreamingModule;
  type: AbaTekStreamingEventType;
};
