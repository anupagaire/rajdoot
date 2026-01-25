const Map = () => {
  const mapUrl =
    "https://www.google.com/maps/place/Rajdoot+Indian+%26+Western+Cuisine/@22.286876,114.138889,1726m/data=!3m1!1e3!4m6!3m5!1s0x3403ffd9dbc04757:0x68620094f3c82e03!8m2!3d22.2868763!4d114.138889!16s%2Fg%2F11m77qzxsw?hl=en&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D";

  return (
    <div className=" w-full bg-white max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row mb-12 h-auto lg:h-[500px]">
      
      <div className="w-full lg:w-2/5 bg-[#011659] text-white px-6 sm:px-10 lg:px-14 py-10 flex flex-col justify-between">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Getting <br /> Here
          </h1>
          <div className="flex flex-col space-y-2 font-semibold">
            <h1>Rajdoot Indian & Western Cuisine</h1>
            <p>1J Water Street, Sai Ying Pun, Hong Kong</p>
          </div>
          <div>
            <p>+852 59567426</p>
          </div>
        </div>

        <div className="flex group mt-6 lg:mt-0">
          <button
            onClick={() => window.open(mapUrl, "_blank")}
            className="border w-full py-3 sm:py-4 group-hover:bg-white group-hover:text-black transition-all duration-300"
          >
            View Larger Map
          </button>
        </div>
      </div>

      {/* Map Embed */} 
      <div className="w-full lg:w-3/5 bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.0631698719376!2d114.13630871092566!3d22.28687627961151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ffd9dbc04757%3A0x68620094f3c82e03!2sRajdoot%20Indian%20%26%20Western%20Cuisine!5e1!3m2!1sen!2snp!4v1768805773172!5m2!1sen!2snp"
          className="w-full h-64 sm:h-80 lg:h-full border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;