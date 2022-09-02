import {Navigate, Route, Routes} from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="homepage" />
      <Route path="*" element={<Navigate to={"homepage"} replace />} />
    </Routes>
  );
}

export default Routing;
