import { createBrowserRouter, Link, Outlet, redirect } from "react-router-dom";
import { UsersList } from "../modules/users/user-list";
import { Counters } from "../modules/counters/counters";
import { UserInfo } from "../modules/users/user-info";
import { fetchUsers } from "../modules/users/model/fetch-users";
import { fetchUser } from "../modules/users/model/fetch-user";
import { store } from "./store";

const loadStore = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(store), 0);
  });
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container p-5 flex flex-col gap-5">
        <header className="py-5 flex gap-4">
          <Link to="users">Users</Link>
          <Link to="counters">Counters</Link>
        </header>
        <Outlet />
      </div>
    ),
    children: [
      { index: true, loader: () => redirect("/users") },
      {
        path: "users",
        element: <UsersList />,
        loader: () => {
          loadStore().then(() => {});

          return null;
        },
      },
      {
        path: "users/:id",
        element: <UserInfo />,
        loader: ({ params }) => {
          loadStore().then(() => {});

          return null;
        },
      },
      { path: "counters", element: <Counters /> },
    ],
  },
]);
