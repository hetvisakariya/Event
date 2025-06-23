import { useParams, Link } from "react-router-dom";

const eventDetails = {
  1: { title: "Tech Conference", description: "A tech event with top speakers and networking.", location: "Bangalore" },
  2: { title: "Music Fest", description: "Enjoy live music and great vibes.", location: "Mumbai" },
};

export default function EventDetails() {
  const { id } = useParams();
  const event = eventDetails[id];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{event?.title}</h2>
      <p className="my-2">{event?.description}</p>
      <p className="italic">Location: {event?.location}</p>
      <Link to="/rsvp" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">RSVP Now</Link>
    </div>
  );
}
