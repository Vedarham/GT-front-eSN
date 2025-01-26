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
      <Router>
        <Navigation />
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Event-Organizers" element={<OrganizerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/host" element={<TournamentForm />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
