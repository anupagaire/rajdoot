import React from "react";

const Testimonials = () => {
  return (
    <section className="min-h-screen w-full my-10">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 italic px-4 text-center">
          What our clients say about us?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              voluptatibus illum voluptate, excepturi, in doloremque doloribus,
              suscipit vel ipsa eum nemo ullam harum odio corrupti fugiat
              deleniti pariatur a sapiente earum consequatur facere ut iste
              ipsum! Nisi sit adipisci sint.
            </p>
            <div>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <h4>Yogesh Shrestha</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
