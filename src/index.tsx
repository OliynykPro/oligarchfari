import ReactDOM from "react-dom/client";
import App from "./screens/App/components/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "src/shared/styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
reportWebVitals();
