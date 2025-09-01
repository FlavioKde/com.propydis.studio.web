// src/components/Card.jsx
import { Link } from "react-router-dom";

export default function Card({ image, title, description, link, buttonLabel = "Ver más" }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        <Link
          to={link}
          className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}