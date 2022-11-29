import { useState } from "react";

import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
