import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Carrier() {
  return (
    <>
      <div className="mx-auto">
        {/* upper section */}
        <div className="relative bg-[url(/corporate/Small_Dark_Hero_Dots.jpg)] bg-cover bg-center bg-no-repeat h-[80vh] mb-20">
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
        <div className="md:w-[90%] mx-auto pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-12 px-4 lg:px-16">
            <div className="space-y-6">
              <h2 className="text-6xl lg:text-6xl font-bold ">
                Book multiple loads and lock in top-rates with RXO Choice
              </h2>
              <p className="mt-4 text-sm pr-8 text-gray-600">
                RXO Choice is an innovative fleet program that allows
                owner-operators to remain agile and flexible even in the
                toughest freight markets. By leveraging RXO Drive, our mobile
                app and loadboard, carriers can access a variety of options.
              </p>
              <Button className="bg-basicColor font-semibold text-black text-sm sm:text-base py-8 my-6 px-10 rounded-full hover:bg-green-300">
                Get Started
              </Button>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                src="/corporate/carousel-1.jpg"
                alt="Forklift loading a truck"
                className="rounded-lg shadow-lg"
                width={1200} // Specify the width of the image
                height={800} // Specify the height of the image
              />
            </div>
          </div>
        </div>
        {/* Support */}

        <div className="bg-black text-white py-12 px-4 lg:px-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            <div>
              <Image
                src="/corporate/what-we-do-2.jpg"
                alt="Customer support"
                className="rounded-lg shadow-lg"
                width={1200} // Specify the width of the image
                height={800} // Specify the height of the image
              />
            </div>

            <div className="space-y-4">
              <p className="text-basicColor font-semibold mb-12">
                Expert service
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Access support as often as you need it
              </h2>
              <p className="text-sm text-gray-200">
                Our carrier specialists are standing by 24/7 to help you with
                any challenges on the road.
              </p>
              <Button className="bg-basicColor font-semibold text-black text-sm sm:text-base py-6 my-6 px-8 rounded-full hover:bg-green-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <div className="md:w-[80%] mx-auto w-full py-20">
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

        <div className="bg-[#F2F2F2] text-black py-12 px-4 lg:px-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            <div className="space-y-4">
              <p className="text-black font-semibold mb-12">Expert service</p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Access support as often as you need it
              </h2>
              <p className="text-sm text-gray-800">
                Our carrier specialists are standing by 24/7 to help you with
                any challenges on the road.
              </p>
              <Button className="bg-basicColor font-semibold text-black text-sm sm:text-base py-6 my-6 px-8 rounded-full hover:bg-green-300">
                Get Started
              </Button>
            </div>
            <div>
              <Image
                src="/corporate/what-we-do-2.jpg"
                alt="Customer support"
                className="rounded-lg shadow-lg"
                width={1200} // Specify the width of the image
                height={800} // Specify the height of the image
              />
            </div>
          </div>
        </div>

        <section className="bg-basicColor py-32">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-black mb-20 text-center">
              Why carriers choose RXO
            </h2>
            <div className="grid gap-12 md:grid-cols-3 px-4 md:px-0">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Book more loads, drive fewer empty miles
                </h3>
                <p className="text-black">
                  The sheer size of our network means you’ll find plenty of load
                  opportunities to fit your schedule, equipment, and routes
                  home.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Run your business with our smart data tools
                </h3>
                <p className="text-black">
                  RXO Connect™ makes your job easier with simple ways to search,
                  bid and book the loads you prefer, when and where you choose.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Keep money in your pocket with our rewards
                </h3>
                <p className="text-black">
                  We offer one of the top carrier rewards programs in the
                  industry: bonus tiers, extra savings, personalized perks, and
                  fast payment options.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
