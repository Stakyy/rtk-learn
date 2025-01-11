import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice, ExtraArgument } from "../../shared/redux";

export type UserId = string;

export type User = {
  id: UserId;
  name: string;
  description: string;
};

export const initialUsersList: User[] = Array.from(
  { length: 3000 },
  (_, index) => ({
    id: `user${index + 11}`,
    name: `User ${index + 11}`,
    description: `Description for User ${index + 11}`,
  })
);

type UsersState = {
  entities: Record<UserId, User | undefined>;
  ids: UserId[];
  fetchUsersStatus: "idle" | "pending" | "success" | "failed";
  fetchUserStatus: "idle" | "pending" | "success" | "failed";
  deleteUserStatus: "idle" | "pending" | "success" | "failed";
};

