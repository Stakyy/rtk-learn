
import { Counters } from "./counters";
import { UsersList } from "./user-list";

function App() {
  return (
    <div className="container p-5 flex flex-col gap-5">
      <Counters />
      <UsersList />
    </div>
  );
}

export default App;
