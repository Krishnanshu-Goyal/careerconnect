
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import GetCertificatePage from './pages/GetcertificatePage';
import Jobopportunity from './pages/Jobopportunity';
import Placementstats from './pages/Placementstats';
import Viewrequest from './pages/Viewrequest';
import Setting from './pages/Setting';
import AddResourcePage from './pages/AddResourcePage';
import FeedbackForm from './pages/FeedbackForm';
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
      <Route path="/add-resource" element={<AddResourcePage />} />
      <Route path="/feedback-form" element={<FeedbackForm />} />
      <Route path="/placementstats" element={<Placementstats />} />
      <Route path="/viewrequest" element={<Viewrequest />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
