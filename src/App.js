import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import JobDetails from './pages/JobDetails';
import NavBar from './components/Navbar/index';
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
