import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import RootAndBower from "./pages/case-studies/RootAndBower/RootAndBower";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/root-and-bower" element={<RootAndBower />} />
        </Routes>
    );
}

export default App;