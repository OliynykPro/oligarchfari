import ReactDOM from "react-dom/client";
import App from "./screens/App/components/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "src/shared/styles/theme";
import { WalletServiceProvider } from "./contexts/WalletProvider/WalletProvider";
import { ModalContextProvider } from "./contexts/ModalProvider/ModalProvider";
import { OligarchfariServiceProvider } from "./contexts/OligarchfariProvider/OligarchfariProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

root.render(
  <ThemeProvider theme={theme}>
    <WalletServiceProvider>
      <OligarchfariServiceProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </OligarchfariServiceProvider>
    </WalletServiceProvider>
  </ThemeProvider>
);
reportWebVitals();
