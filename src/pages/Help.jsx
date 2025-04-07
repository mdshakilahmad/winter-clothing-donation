const Help = () => {
  return (
    <div className="bg-gray-100 py-11">
      <h2 className="text-3xl text-center py-5">
        Welcome to Winter Clothing Donation
      </h2>
      <h2 className="text-center font-semibold text-2xl">How to Help</h2>
      <p className="text-center">
        Your kidness can bring warmth and hope to others. Heres how can help
      </p>
      <div className="bg-white mx-auto w-4/5 space-y-3 p-8 mt-9">
        <div className="flex gap-5">
          <span className="bg-gray-100 p-4 rounded-full">1</span>
          <div>
            <h4 className="text-xl font-semibold">Donate Winter Clothing</h4>
            <p>
              You can donate gently used or new winter clothing such as jackets,
              sweaters, gloves, hats, and scarves to help those in need.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <span className="bg-gray-100 p-4 rounded-full">2</span>
          <div>
            <h4 className="text-xl font-semibold">Monetary Donations</h4>
            <p>
              Financial contributes help us purchase items for donation
              campains. Your donation makes a big difference !
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <span className="bg-gray-100 p-4 rounded-full">3</span>
          <div>
            <h4 className="text-xl font-semibold">Spread Awareness </h4>
            <p>
              share our campaign on social media and encourage your friends and
              family to participte in the intiative
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <span className="bg-gray-100 p-4 rounded-full">4</span>
          <div>
            <h4 className="text-xl font-semibold">volunter</h4>
            <p>
              Signup to help distriute clothing, assist with events, or support
              in other ways at our local donation centers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
