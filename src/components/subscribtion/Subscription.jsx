const Subscription = () => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="flex justify-center mt-8">
        <img
          className="bg-white rounded-xl"
          src="https://i.ibb.co/kJR9tXp/logo.png"
          alt=""
        />
      </div>
      <div className="text-center mt-10 lg:flex justify-between items-center">
        <div className="mb-">
          <h1 className="text-2xl font-medium">Our Address</h1>
          <p className="font-bold text-lg mt-3 mb-2">Classic Hotel </p>
          <p className="font-medium">
            Via Serlas 546 6700 <br />
            Dhaka,Bangladesh.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-medium mt-8">Reservation</h1>
          <p className="font-medium">
            Tel.: +41 (0)54 2344 00 <br />
            Fax: +41 (0)542344 99
            <br />
            care@clshotel.com
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-medium mt-8">
            Subscribe For Exclusive Offer
          </h1>
          <form>
            <div className="">
              <input
                className="mt-5 mb-2 py-2 px-3 rounded-lg"
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <br />
              <input
                className=" mb-2 py-2 px-3 rounded-lg"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <br />
              <button
                className="bg-gradient-to-r from-blue-400 to-red-500 hover:from-pink-500 hover:to-yellow-500 py-3
              lg: px-10 rounded-xl text-white font-medium"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
