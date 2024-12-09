
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Resources from './pages/Resources';
import Jobopportunity from './pages/Jobopportunity';
import Interviewexp from './pages/Interviewexp.js';
import Reqreferral from './pages/Reqreferral.js';
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
      <Route path="/resources" element={<Resources />} />
      <Route path="/jobopportunity" element={<Jobopportunity />} />
      <Route path="/interview-exp" element={<Interviewexp />} />
      <Route path="/request-referral" element={<Reqreferral />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
