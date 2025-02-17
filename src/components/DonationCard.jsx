import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const { title, image, description, status, contactinfo, division } = donation;
  // Check if image URL is correct
  console.log("Image URL:", image);
  return (
    <div className="space-y-3 py-4 rounded-lg text-center bg-gray-100">
      <h2>{title}</h2>
      <p>{status}</p>
      <div>
        <img className="mx-auto w-full" src={image} alt="winter-img" />
      </div>
      <p>{description}</p>
      <p>{contactinfo}</p>
      <p>{division}</p>
      <button className="btn btn-primary">Donate Now</button>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
