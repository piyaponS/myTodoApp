import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
