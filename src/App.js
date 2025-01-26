import Navigation from './components/NavBar/Navigation.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.js';
import TournamentsPage from './pages/TournamentsPage/TournamentsPage.js';
import LeaderboardsPage from './pages/LeaderboardsPage/LeaderboardsPage.js';
import FAQPage from './pages/FAQPage/FAQPage.js';
import ContactForm from './pages/ContactPage/ContactPage.js';
import OrganizerPage from './pages/OrganizerPage/OrganizerPage.js';
import ProfilePage from './pages/ProfilePage/ProfilePage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import SubscriptionPage from './pages/SubscriptionPage/SubscPage.js';
import TournamentForm from './pages/ProfilePage/components/TournamentForm/TournamentForm.js';
import AboutPage from './pages/AboutPage/components/AboutPage.js';
import AuthPage from './pages/AuthPage/AuthPage.js';

function App() {
  return (
    <div className="App">
      <Router basename="/GT-front-eSN">
        <Navigation />
        <Routes>
          <Route path="/GT-front-eSN/login" element={<AuthPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/GT-front-eSN/tournaments" element={<TournamentsPage />} />
          <Route path="/GT-front-eSN/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/GT-front-eSN/FAQ" element={<FAQPage />} />
          <Route path="/GT-front-eSN/ContactForm" element={<ContactForm />} />
          <Route path="/GT-front-eSN/Event-Organizers" element={<OrganizerPage />} />
          <Route path="/GT-front-eSN/profile" element={<ProfilePage />} />
          <Route path="/GT-front-eSN/shop" element={<ShopPage />} />
          <Route path="/GT-front-eSN/subscription" element={<SubscriptionPage />} />
          <Route path="/GT-front-eSN/host" element={<TournamentForm />} />
          <Route path="/GT-front-eSN/about-us" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
