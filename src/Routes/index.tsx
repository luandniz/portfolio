import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
