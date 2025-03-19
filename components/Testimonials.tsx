import React from "react";

const testimonials = [
  {
    name: "Dilip KC",
    text: "The flavors here remind me of home! The butter chicken was rich and creamy, and the momos were simply the best in Hong Kong. A must-visit place for Indian and Nepali food lovers!",
    img: "",
  },
  {
    name: "Anita Sharma",
    text: "Absolutely loved the ambiance and the food. The tandoori platter was sizzling and packed with flavor. The staff was warm and welcoming can't wait to return!",
    img: "",
  },
  {
    name: "Michael Wong",
    text: "A hidden gem in Hong Kong! The Nepali thali set was a delightful experience, full of authentic flavors. Pairing it with a lassi was the best decision!",
    img: "",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-16 sm:px-10 w-full mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 italic">
          What Our Guests Say
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Experience the authentic taste of India & Nepal through our guests&apos; words.
        </p>
      </div>

      <section className="w-full py-5 lg:py-10">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 border-2 border-[#d4b78f] rounded-lg duration-300 hover:shadow-lg"
              >
                <p className="text-gray-700 text-center leading-relaxed italic">
                &quot;{testimonial.text}&quot;
                </p>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="h-14 w-14 object-cover rounded-full border-2 border-[#d4b78f]"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 mt-2">
                    {testimonial.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;