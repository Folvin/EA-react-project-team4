import {Navigate, Route, Routes} from "react-router-dom";
import Apex from "./pages/apex-legends/Apex";
import F1 from "./pages/f1/F1Homepage";
import LiRHomepage from "./pages/lost-in-random/LostInRandom";
import Presentation from "./pages/presentation/Presentation";

function Routing() {
  return (
    <Routes>
      <Route path="homepage" />
      <Route path="apex" element={<Apex />} />
      <Route path="F1" element={<F1 />} />
      <Route path="lost-in-random" element={<LiRHomepage />} />
      <Route path="presentation" element={<Presentation />} />
      {<Route path="*" element={<Navigate to={"presentation"} replace />} />}
    </Routes>
  );
}

export default Routing;
