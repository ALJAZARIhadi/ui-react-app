import "./App.css";
import Material from "./Material.js";
/* import UiAlerts from './UiAlerts.js';
 */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, green } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      primary: {
        main: orange[200],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ marginTop: "300px", marginLeft: "500px" }}>
        <Material />
        {/* <UiAlerts/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
