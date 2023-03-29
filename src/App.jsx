import { useState } from "react";
import "./App.css";
import AppthemeProvider from "./themes/AppthemeProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppthemeProvider>
      <div className="App"></div>;
    </AppthemeProvider>
  );
}

export default App;
