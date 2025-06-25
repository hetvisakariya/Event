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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <ul className="flex gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
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
        {/* Add login route if needed */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
