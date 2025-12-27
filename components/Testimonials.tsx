import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Harry Ghali",
    text:
      "Very good indian food all over in Hong Kong which is located in Sai ying pun water street.We had a group party of 6 people. The service was perfect given by friendly waiters as well as the chefs.The chef in this restaurant has experience of more than 15 years that’s why food is so delicious, they have draught beer, we enjoyed chicken chilly,chapate,pakora,tandoori and garlic naan,lamb shekh kebab,butter chicken,lamb curry every single dish was full of flavour and perfect.The music on the background was decent.Also they have pizza,burger,spaghetti.So, it is 70% indian and 30% Western.We really enjoyed a lot that day on rajdoot.I would like to recommend every brother and sisters to have a try on this restaurant which you will never forget.",
    img: "/harry.png",
    link: "https://www.google.com/maps/reviews/@22.2868763,114.138889,884m/data=!3m2!1e3!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xKYWJEWjRWR0poYmpoTVZtdDJRMkZLYVhjd2FHYxAB!2m1!1s0x0:0x68620094f3c82e03!5m1!1e2?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Andrew Kwok",
    text:
      "Been here twice now, and it's safe to say I will be their new regular customer :Their butter chicken and beef curry are so good! Not to mention as someone who doesn't handle spiciness well, their mild spicy is the perfect amount of heat I can take!But their cheese naan just goes so well with their options! They do have naan included on as their main options but I tried them once and now I can't resist adding them from now on. Their mango lassi also washes down the spice so nice. Next time I'll definitely try to dine in 😋.Their servers are very nice too. Definitely recommend to try them out!!Price per person:$100–150, Food: 5, Service: 5 ,Atmosphere: 5,Noise level Quiet, easy to talk",
    img: "/unnamed.png",
    link: "https://www.google.com/maps/reviews/@22.2868763,114.138889,884m/data=!3m2!1e3!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2podFNVWnhiVnB3V1V4b1pEVXRNREowTXkxV1MwRRAB!2m1!1s0x0:0x68620094f3c82e03!5m1!1e2?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Colin Squire",
    text:
      "In town for the weekend between supplier visits in south Asia and China mainland and wanted to get dinner close to the hotel, we dropped in the restaurant on Saturday for a drink and to check out the atmosphere,  after a couple of beers we decided to go back on Sunday evening for dinner.  We were not disappointed, the food was very good, and it comes with great service, we  would definitely recommend this restaurant to our colleagues and go back ourselves  when in this part of HK and in need of good Indian food.Meal type:Dinner Price per person :$1–50. Food: 5 .Service: 5.Atmosphere: 5. Noise level. Quiet, easy to talk.Seating type. Indoor dining area",
    img: "/colin.png",
    link: "https://www.google.com/maps/reviews/@22.2875884,114.1393232,234m/data=!3m1!1e3!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pBNU1uTmhRVWh5WlRCSFZVWTVSMUo2UkVSeVJrRRAB!2m1!1s0x0:0x68620094f3c82e03!5m1!1e2?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
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
              <a
                key={index}
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="flex flex-col items-center p-8 border-2 border-[#d4b78f] 
                             rounded-lg transition duration-300 
                             hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
<p className="text-gray-700 text-justify  whitespace-pre-line text-sm md:text-base tracking-wide">
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
                    <h2 className="text-xl font-semibold text-gray-800 mt-2 group-hover:text-[#b8935f]">
                      {testimonial.name}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
