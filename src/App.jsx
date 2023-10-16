import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>

        <Route
          path="login"
          element={<PublicRoute component={LoginPage} redirectTo={"/"} />}
        />
        <Route
          path="register"
          element={<PublicRoute component={RegisterPage} redirectTo={"/"} />}
        />
      </Routes>
    </>
  );
};

export default App;
