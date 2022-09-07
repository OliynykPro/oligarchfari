import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "src/shared/components/Header/Header";
import { GlobalStyle } from "src/shared/styles/globalStyles";
import routes from "../route";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="App">
          <GlobalStyle />
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </>
  );
}
