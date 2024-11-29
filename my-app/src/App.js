
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import GetCertificatePage from './pages/GetcertificatePage';
import Jobopportunity from './pages/Jobopportunity';
import Placementstatus from './pages/Placementstatus';
import Viewrequest from './pages/Viewrequest';
import Setting from './pages/Setting';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/getcertificate" element={<GetCertificatePage />} />
      <Route path="/jobopportunity" element={<Jobopportunity />} />
      <Route path="/placementstatus" element={<Placementstatus />} />
      <Route path="/viewrequest" element={<Viewrequest />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
