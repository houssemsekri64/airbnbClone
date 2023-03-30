import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/Header";
import AppthemeProvider from "./themes/AppthemeProvider";
import { Box } from "@mui/material";
import OptionsTab from "./components/OptionsTab";
import Container from "@mui/material/Container";
import LocationCards from "./components/LocationCards";

function App() {
  return (
    <AppthemeProvider>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box>
          <Header />
        </Box>
        <Box>
          <OptionsTab />
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
          </Container>
        </Box>
      </Box>
    </AppthemeProvider>
  );
}

export default App;
