import { configureStore, createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { usersSlice } from "./modules/users/users.slice";
import { countersReducer } from "./modules/counters/counters.slice";

// const reducer = (state = initialState, action: Action): State => {
//   return {
//     users: usersReducer(state.users, action),
//     counters: countersReducer(state.counters, action)
//   }
// };

export const store = configureStore({
  reducer: {
    counters: countersReducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSellector = createSelector.withTypes<AppState>();
