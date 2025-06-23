import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import RSVP from "./pages/RSVP";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;