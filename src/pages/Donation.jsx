import { useEffect, useState } from "react";
import DonationCard from "../components/DonationCard";

const Donation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("donation.json")
    fetch(
      "https://donation-mdshakilahmad-mdshakilahmads-projects.vercel.app/api/donations"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2>donation</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Donation;
