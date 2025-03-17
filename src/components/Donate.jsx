import { toast } from "react-toastify";
import poorPeople from "../assets/poor-pepole.jpg";
const Donate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you i will reach your destination soon");
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">
            Winter Clothing Donation!
          </h1>
          <div>
            <img className="my-8 w-full" src={poorPeople} alt="poorPeople" />
          </div>
          <p>
            You can donate winter clothing to charities like One Warm Coat,
            Goodwill, and Oxfam. You can also donate to local organizations.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-center pt-6 text-2xl font-semibold">
            Dotaion Items
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity of Items</span>
              </label>
              <input
                type="text"
                placeholder="e.g.., 2 jacket, sweater"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Type</span>
              </label>
              <input
                type="text"
                placeholder="e.g.., blaket,jacket,sweater"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pickup Loaction</span>
              </label>
              <input
                type="text"
                placeholder="e.g.House 12, Road 5,Dhanmandi,Dhaka"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Additional Notes (Option)</span>
              </label>
              <textarea
                placeholder="Add only additonal notes"
                className="input input-bordered resize-none pt-1"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit Donation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
