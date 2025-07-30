import './App.css'
import Home from './components/home.jsx'
import Sidebar from './components/sidebar.jsx'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#f5f5f5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App
