import { z } from "zod";
import { baseApi } from "../../shared/api";
import { User, UserId } from "./users.slice";

const UserDtoSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
  });

export const usersApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getUsers: create.query<User[], void>({
            query: () => "/users",
            providesTags: ["Users", {type: 'Users', id: "LIST"}],
            transformResponse: (res: unknown) => UserDtoSchema.array().parse(res)
        }),
        getUser: create.query<User, UserId>({
            query: (userId) => `/users/${userId}`,
            providesTags: (_, __, userId) =>  ["Users", {type: 'Users', id: userId}],
            transformResponse: (res: unknown) => UserDtoSchema.parse(res)

        }),
        deleteUser: create.mutation<void, UserId>({
            query: (userId) => ({method: "DELETE", url: `/users/${userId}`}),
            invalidatesTags: (_, __, userId) => [{type: 'Users', id: "LIST"}, {type: 'Users', id: userId}]
        })
    }),
    overrideExisting: true
})