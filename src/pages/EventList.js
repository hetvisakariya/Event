import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "Tech Conference", date: "2025-07-01", location: "Bangalore" },
  { id: 2, title: "Music Fest", date: "2025-08-15", location: "Mumbai" },
];

export default function EventList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid gap-4">
        {events.map(event => (
          <div key={event.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.date} - {event.location}</p>
            <Link to={`/events/${event.id}`} className="text-blue-500 underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
