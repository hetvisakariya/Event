import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const events = [
    {
      title: "In-person events",
      description: "Keep it all together at the venue",
      color: "from-purple-900 to-pink-700",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      slug: "in-person",
    },
    {
      title: "Virtual events",
      description: "Go beyond webinars and workshops",
      color: "from-blue-600 to-cyan-400",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
      slug: "virtual",
    },
    {
      title: "Hybrid events",
      description: "Merge the physical with the virtual",
      color: "from-pink-200 to-purple-200",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
      slug: "hybrid",
    },
  ];

  const handleExplore = (slug) => {
    navigate(`/events/${slug}`);
  };

  return (
    <div className="p-4 text-center bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to EventEase</h1>
      <p className="mb-8">Your one-stop destination for managing events!</p>

      <div className="py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">Event Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 bg-gradient-to-br ${event.color} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="mb-4">{event.description}</p>
              <img
                src={event.image}
                alt={event.title}
                className="rounded-lg w-full h-40 object-cover"
              />
              <button
                onClick={() => handleExplore(event.slug)}
                className="mt-4 bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200"
              >
                Explore More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

