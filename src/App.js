import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/UserProfile";
import Setting from "./pages/Setting";
import UserProfile from "./pages/UserProfile";
import Help from "./pages/Help";
import Workspace from "./pages/Workspace";
import MyAccount from "./pages/MyAccount";
import Private from "./pages/Private";
import NewPage from "./pages/NewPage";
function App() {
  return (
    <Router>
      <div>
      <SideBar>
        <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/help" element={<Help />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/private" element={<Private />} />
          <Route path="/newpage/*" element={<NewPage />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
        </main>
      </SideBar>
      </div>
    </Router>
    
  );
}

export default App;
