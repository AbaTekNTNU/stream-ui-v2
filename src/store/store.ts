import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../modules/basket/score/reducer";
import firiLogoReducer from "../modules/basket/firilogo/reducer";
import gameReducer from "./../modules/basket/team/reducer";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    firiLogo: firiLogoReducer,
    game: gameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
