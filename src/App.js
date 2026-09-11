import "./App.css";
import Material from "./Material.js";
/* import UiAlerts from './UiAlerts.js';
 */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, green } from "@mui/material/colors";
import Task from "./Task.js";
function App() {
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: green[200],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        {/* <Material /> */}
        {/* <Material /> */}
        {/* <Material /> */}
        {/* <UiAlerts/> */}
        <Task/>
      </div>
    </ThemeProvider>
  );
}

export default App;
