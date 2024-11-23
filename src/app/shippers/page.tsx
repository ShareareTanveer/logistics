import { Button } from "@/components/ui/button";

export default function Shipper() {
  return (
    <>
      <div className="mx-auto space-y-20">
        {/* upper section */}
        <div className="relative bg-[url(/corporate/contact-logistics.jpg)] bg-cover bg-center bg-no-repeat h-[80vh]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#001524]/95 to-[#11001c]/25 md:bg-gradient-to-r"></div>

          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:px-8"
            data-aos="fade-right"
          >
            <div className="max-w-xl text-center sm:text-left text-white">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                LTL Shipping Solutions
              </h1>

              <p className="mt-4 max-w-lg text-base sm:text-lg sm:leading-relaxed">
                LTL shipping solutions simplified with our dedicated
                representatives and innovative technology.
              </p>
              <Button className="bg-basicColor font-semibold text-black text-sm sm:text-base py-8 my-6 px-10 rounded-full hover:bg-green-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        {/* LTL SECTION */}
        <div className="container pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 lg:px-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed ">
                The expertise you need with flexible, customized LTL managed
                solutions
              </h2>
              <p className="mt-4 text-sm pr-8 text-gray-600">
                Our highly integrated network delivers customized transportation
                solutions to global enterprises by leveraging our cutting-edge
                technology and massive capacity.
              </p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>
                  <strong className="font-semibold text-black">
                    Capacity.
                  </strong>{" "}
                  We partner with over 70 local, regional, and national LTL
                  specialized carriers to fit your organization's needs.
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Expertise.
                  </strong>{" "}
                  Whether it's dry, temp-controlled, or special handling, our
                  network of carriers and equipment have the solution for your
                  freight.
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Customer Service.
                  </strong>{" "}
                  Your single point of contact will lead a dedicated service,
                  operational, and onboarding team to provide turnkey and
                  hyper-care services.
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Optimization.
                  </strong>{" "}
                  Our team of dedicated experts will find you the best solution
                  made for you.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/corporate/carousel-1.jpg"
                alt="Forklift loading a truck"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Support */}
        <div
          className="relative flex justify-center items-center  bg-fixed bg-center bg-cover bg-no-repeat h-[400px]"
          style={{ backgroundImage: `url('/corporate/hero-logistics.jpg')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center  px-4 sm:px-8 text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
              24/7 Shipping Support
            </h2>
            <div className="space-y-6 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-xl px-8 py-8 lg:px-12 lg:py-12 text-white w-full max-w-4xl">
              <p>
                We pride ourselves on being a trusted partner for you especially
                when the unexpected occurs. Our dedicated LTL shipping experts
                are available 24/7 to help you with any situation.
              </p>
            </div>
          </div>
        </div>
        {/* LTL SECTION */}
        <div className="container pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 lg:px-16">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/corporate/carousel-1.jpg"
                alt="Forklift loading a truck"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed ">
                The expertise you need with flexible, customized LTL managed
                solutions
              </h2>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>
                  <strong className="font-semibold text-black">
                    Capacity.
                  </strong>{" "}
                  We partner with over 70 local, regional, and national LTL
                  specialized carriers to fit your organization's needs.
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Expertise.
                  </strong>{" "}
                  Whether it's dry, temp-controlled, or special handling, our
                  network of carriers and equipment have the solution for your
                  freight.
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Customer Service.
                  </strong>{" "}
                  Your single point of contact will lead a dedicated service,
                  operational, and onboarding team to provide turnkey and
                  hyper-care services.
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Optimization.
                  </strong>{" "}
                  Our team of dedicated experts will find you the best solution
                  made for you.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:w-[80%] mx-auto w-full pb-20">
          <div className="bg-black text-white py-12 px-10 md:flex justify-between items-center rounded-2xl gap-5">
            <div className="space-y-2">
              <p className="text-2xl ">Streamline your LTL Solutions today</p>
              <p className="text-gray-300">
                Learn more about our managed LTL solutions that are right for
                your business.
              </p>
            </div>
            <Button className="bg-basicColor font-semibold text-black text-sm sm:text-base py-8 my-6 px-10 rounded-full hover:bg-green-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
