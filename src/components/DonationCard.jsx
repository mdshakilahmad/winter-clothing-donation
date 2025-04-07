import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { title, image, description, status, contactinfo, division } = donation;

  return (
    <div className="space-y-4 p-6 rounded-lg shadow-lg bg-white text-center border border-gray-200 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-red-600">{status}</p>
        <div className="overflow-hidden rounded-lg">
          <img
            className="mx-auto w-full h-48 object-cover"
            src={image}
            alt="winter-img"
          />
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-gray-500 text-sm text-left">
          <span className="font-semibold">Contact:</span> {contactinfo}
        </p>
        <p className="text-gray-500 text-sm text-left">
          <span className="font-semibold">Division:</span> {division}
        </p>
      </div>
      <div className="mt-4">
        <Link to={"/donate"}>
          <button className="btn btn-primary px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
