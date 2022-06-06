import React from "react";

const Explore = () => {
  return (
    <div>
      <div className="flex mt-2 p-6 ">
        <div className="rounded shadow-lg bg-white max-w-sm z-0 mx-4">
          <img
            className=" rounded-t-lg object-cover h-40 w-full relative "
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
          <div className=" rounded-full absolute -mt-12 ml-36">
            {" "}
            <img
              className=" rounded-full h-24 w-24  mx-auto border-4 border-gray-100"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>

          <div className="p-2 mt-10  ">
            <h5 className="text-gray-900 text-lg font-bold mb-1 text-center">
              Collection Name
            </h5>
            <h5 className="text-gray-900 text-sm font-medium mb-1 text-center">
              by <span className="text-purple-500"> Collector Name</span>
            </h5>
            <p className="text-gray-700 text-sm font-medium text-center py-2 px-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
