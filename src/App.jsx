import './App.css'
import Navbar from './Components/Navbar';
import AboutPage from './MainPages/AboutPage';
import HomeLandingPage from "./MainPages/HomeLandingPage"
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Service from './MainPages/Service';
import LoginForm from './Components/reusable/LoginForm';
import SignupForm from './Components/reusable/SignupForm';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomeLandingPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/offerings" element={<Service/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        </Routes>
    </Router>
  )
}

export default App;
