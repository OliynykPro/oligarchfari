import ReactDOM from "react-dom/client";
import App from "./screens/App/components/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "src/shared/styles/theme";
import { WalletServiceProvider } from "./contexts/WalletProvider/WalletProvider";
import { ModalContextProvider } from "./contexts/ModalProvider/ModalProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

root.render(
  <ThemeProvider theme={theme}>
    <WalletServiceProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </WalletServiceProvider>
  </ThemeProvider>
);
reportWebVitals();
