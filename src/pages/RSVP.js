import { useNavigate } from "react-router-dom";

export default function RSVP() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">RSVP Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" required className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
        <select required className="w-full p-2 border rounded">
          <option value="">Will you attend?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
