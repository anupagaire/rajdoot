import React from "react";

const testimonials = [
  {
    name: " Mùchén",
    text: "今日工作關係去香港島，去到HKU附近，想起很久無去屈地街那邊，可以説是KongU的unofficial 飯堂，大家lunch的時候如果有時間都會來這邊，不然便是去石唐街市。這間的服務不錯，很有禮貌，會主動的問我需不需要refill naan，有分加我覺得naan 可以再烤長多一點時間。有個free餐湯，小心是有黑胡椒。而chicken masala 我order 了小辣，下次可以試medium ，平時食開一包辛辣麵味粉，是應該無問題的。",
    img: "/person-placeholder.jpg",
  },
  {
    name: "浩宇",
    text: "今天去了港大附近的印度餐廳，最近很想吃印度菜，就從小紅書上搜看見很多人推薦就去了，它家有學生午市套餐，進去店員會問是不是學生，學生套餐都只要60文，我們order了butter chicken和雞的masala，看起來都差不多但masala吃起來會辣一點，butter chicken就甜甜的。此外set還包含兩個naan，我們要了一個牛油和一個pain的都很好吃，很柔軟萱萱的又有嚼劲。非常推荐，下次还去。",
    img: "/person-placeholder.jpg",
  },
  {
    name: " Yŭxuān (宇轩)",
    text: "巷子里的印度菜——Rajdoot🇮🇳Openrice上只有4条评论的店，味道却很地道。探索未知的美食，从低预期到被每道菜折服，被美食治愈后的我写论文效率会更高🌹服务员小哥服务态度很好，会提供很中肯的意见。主厨应该是印度人或者尼泊尔人。咖喱很浓稠，像是煮很久的汁料，肉哥^_^和青豆都很入味！好吃😋好吃😋好吃😍😍😍😍😍😍😍😍😍😍😍😍😍😘😘😘😘😘😘🥰😍😍😍🥰😍🥰😍🥰",
    img: "/person-placeholder.jpg",
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
