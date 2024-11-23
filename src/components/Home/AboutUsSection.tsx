import React from "react";

function AboutUsSection() {
  return (
    <section className=" py-20 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 mx-auto max-w-4xl">
          Atlas Logistics Express is a leading logistics and machinery supplier
          company in Bangladesh. We specialize in Import, Export, and
          Distribution of various machinery, and offer top-notch logistics
          services to ensure smooth supply chain operations. Our warehouse is
          located at the BSCIC Industrial Estate, Tongi, Gazipur, Bangladesh.
        </p>

        <div className="mb-16">
          <div className="flex justify-center gap-40 md:gap-20 flex-wrap mt-48">
            {/* Owner Card 1 */}
            <div className="relative bg-white shadow-xl rounded-xl py-8 px-8 w-96 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out ">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40  rounded-lg flex justify-center items-center text-white shadow-xl border-4 border-white">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Md Rabiul Mollah"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="pt-16 text-center">
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  Md Rabiul Mollah
                </h4>
                <p className=" font-semibold mb-4">
                  Managing Partner
                </p>
                <p className="text-gray-700">
                  Md Rabiul Mollah brings vast experience in logistics and
                  business management. His leadership drives the growth and
                  operational excellence of Atlas Logistics Express.
                </p>
              </div>
            </div>

            {/* Owner Card 2 */}
            <div className="relative bg-white shadow-xl rounded-xl p-8 w-96 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40  rounded-lg flex justify-center items-center text-white shadow-xl border-4 border-white">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Noman Hosen"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="pt-16 text-center">
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  Noman Hosen
                </h4>
                <p className="font-semibold mb-4">Partner</p>
                <p className="text-gray-700">
                  Noman Hosen's expertise in the import and export industry has
                  been instrumental in shaping our business model. His strategic
                  vision helps Atlas expand its market presence globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white shadow-xl rounded-lg p-8 mx-auto max-w-4xl mt-12">
          <h4 className="text-2xl font-semibold  mb-4">Contact Us</h4>
          <p className=" mb-2">
            <strong>Office:</strong> 7th Floor, 77 Motijheel Commercial Area,
            Motijheel, Dhaka-1000, Bangladesh
          </p>
          <p className=" mb-2">
            <strong>Warehouse:</strong> BSCIC Industrial Estate, Tongi, Gazipur,
            Bangladesh
          </p>
          <p className="mb-2">
            <strong>Website:</strong>{" "}
            <a
              href="https://atlaslogisticsexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              atlaslogisticsexpress.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
