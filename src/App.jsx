import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/Header";
import AppthemeProvider from "./themes/AppthemeProvider";
import { Box } from "@mui/material";

function App() {
  return (
    <AppthemeProvider>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box>
          <Header />
        </Box>
      </Box>
    </AppthemeProvider>
  );
}

export default App;
