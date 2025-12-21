import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mamata Linkha",
    text:
      " Visited an indian restaurant and bar located in sai ying pun water street. it was both restuarant and bar looks was fanstatic as well as the food. They served both indian and western food.You can try pizza,steak,burrito,salad there naan was quite good.sitting area was good and very comfortable.they have both lunch and dinner set lunch set include soup and rice or naan in indian set.my overall experience was good staff very very friendly.I recommend this place for good food.",
    img: "/mamta.png",
  },
  {
    name: "Khan Sadia",
    text:
      "Rajdoot Restaurant is a hidden gem that offers incredible value for money, especially for students. Their student set menu is a standout—affordable, filling, and packed with flavor. The food is consistently delicious, with dishes that always hit the spot, whether you're craving a hearty curry or a quick snack. The portions are generous, and the quality never disappoints. The ambiance is cozy, and the staff are friendly and attentive, making every visit enjoyable. It's the perfect place for a budget-friendly yet satisfying meal. Rajdoot truly delivers on taste and affordability, making it a favorite spot for students and food lovers alike!",
    img: "/unnamed.png",
  },
  {
    name: "Colin Squire",
    text:
      "In town for the weekend between supplier visits in south Asia and China mainland and wanted to get dinner close to the hotel, we dropped in the restaurant on Saturday for a drink and to check out the atmosphere, after a couple of beers we decided to go back on Sunday evening for dinner. We were not disappointed, the food was very good, and it comes with great service, we would definitely recommend this restaurant to our colleagues and go back ourselves when in this part of HK and in need of good Indian food.",
    img: "/colin.png",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-16 sm:px-10 w-full mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          What Our Guests Say
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Experience the authentic taste of India & Nepal through our
          guests&apos; words.
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
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={56}
                    height={56}
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
