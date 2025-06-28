import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import RSVP from "./pages/RSVP";
import ThankYou from "./pages/ThankYou";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="bg-white text-black p-4 shadow">
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Login
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
