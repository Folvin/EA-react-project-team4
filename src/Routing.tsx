import {Navigate, Route, Routes} from "react-router-dom";
import Apex from "./pages/apex-legends/Apex";
import F1 from "./pages/f1/F1Homepage";

function Routing() {
  return (
    <Routes>
      <Route path="homepage" />
      <Route path="apex" element={<Apex />} />
      <Route path="F1" element={<F1 />} />
      <Route path="*" element={<Navigate to={"homepage"} replace />} />
    </Routes>
  );
}

export default Routing;
