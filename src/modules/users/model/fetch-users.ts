import { createAppAsyncThunk } from "../../../shared/redux";
import { usersSlice } from "../users.slice";

export const fetchUsers = createAppAsyncThunk(
  "users/fetchUsers",
  async (_?: { refetch?: boolean } = {}, thunkApi) => 
     thunkApi.extra.api.getUsers(), {condition(params, {getState}) {
       const isIdle = usersSlice.selectors.selectIsFetchUsersIdle(getState())

       if (!params?.refetch && !isIdle){
        return false
       }
       return true
     }}
  
);
