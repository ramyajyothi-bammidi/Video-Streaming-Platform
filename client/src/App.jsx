import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;