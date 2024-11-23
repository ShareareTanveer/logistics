import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const contactData = [
  {
    title: "Freight Brokerage",
    address: "11215 North Community House Road\nCharlotte, NC 28277",
    phone: "(855) 744-7976",
    email: "freightbrokerage@rxo.com",
  },
  {
    title: "Freight Forwarding",
    address: "263 Shuman Boulevard\nNaperville, IL 60563",
    phone: "(866) 245-7447\n(630) 795-1300",
    email: "global@rxo.com",
  },
  {
    title: "Home Delivery",
    address: "1851 West Oak Parkway\nMarietta, GA 30062",
    phone: "(866) 373-7874",
    email: "HomeDeliveryHelp@rxo.com",
  },
  {
    title: "Last Mile",
    address: "1851 West Oak Parkway\nMarietta, GA 30062",
    phone: "(866) 373-7874",
    email: "lastmile@rxo.com",
  },
  {
    title: "Managed Transportation",
    address: "263 Shuman Boulevard\nNaperville, IL 60563",
    phone: "(866) 466-3656",
    email: "managedtransportation@rxo.com",
  },
  {
    title: "Dedicated Transportation",
    address: "1275 NW 128th Street\nClive, IA 50325",
    phone: "(515) 265-6171\n(800) 636-6171",
    email: "managedtransportation@rxo.com",
  },
];

export default function Contact() {
  return (
    <>
      <div className="mx-auto">
        {/* upper section */}
        <div className="relative bg-[url(/corporate/Small_Light_Hero_Dots.jpg)] bg-cover bg-center bg-no-repeat h-[40vh]">
          <div
            className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:px-8"
            data-aos="fade-right"
          >
            <div className=" text-center sm:text-left text-black">
              <h1 className="text-4xl md:text-6xl ">Contact Us</h1>
            </div>
          </div>
        </div>
        <section className="bg-white py-16">
          <div className="md:w-[90%] mx-auto px-4 lg:flex">
            {/* Left Section */}
            <div className="lg:w-1/3 mb-8 lg:mb-0 text-center md:text-left">
              <h2 className="text-5xl text-black mb-8 border-b-4 border-basicColor w-fit pb-6 mx-auto md:mx-0">
                Get in Touch
              </h2>
              <p className="text-gray-600 font-medium mb-4">GENERAL CONTACT</p>
              <p className="text-black font-bold text-lg mb-4">
                (833) 572-5796
              </p>
              <p className="text-gray-600 font-medium mb-4">HOME DELIVERY</p>
              <p className="text-black font-bold text-lg mb-2">
                (866) 378-7874
              </p>
            </div>

            {/* Right Section */}
            <div className="lg:w-2/3 md:px-12 w-full">
              <form className="grid grid-cols-1 gap-6">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-black font-medium"
                    >
                      First Name *
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      className="w-full mt-2 px-4 py-6  rounded-sm focus:outline-none focus:ring-2 focus:ring-basicColor bg-[#F2F2F2]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-black font-medium"
                    >
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      className="w-full mt-2 px-4 py-6  rounded-sm focus:outline-none focus:ring-2 focus:ring-basicColor bg-[#F2F2F2]"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid  grid-cols-1 md:grid-cols-2  gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-black font-medium"
                    >
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      className="w-full mt-2 px-4 py-6  rounded-sm focus:outline-none focus:ring-2 focus:ring-basicColor bg-[#F2F2F2]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-black font-medium"
                    >
                      Phone *
                    </label>
                    <Input
                      type="text"
                      id="phone"
                      placeholder="0182-345678"
                      className="w-full mt-2 px-4 py-6  rounded-sm focus:outline-none focus:ring-2 focus:ring-basicColor bg-[#F2F2F2]"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-black font-medium"
                  >
                    Company Name *
                  </label>
                  <Input
                    type="text"
                    id="companyName"
                    className="w-full mt-2 px-4 py-6  rounded-sm focus:outline-none focus:ring-2 focus:ring-basicColor bg-[#F2F2F2]"
                  />
                </div>

                {/* Dropdown */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-black font-medium"
                  >
                    I am a... *
                  </label>
                  <select
                    id="role"
                    className="w-full mt-2 bg-[#F2F2F2] px-4 py-3  rounded-sm focus:outline-none focus:ring-2 focus:ring-basicColor"
                  >
                    <option value="">Please Select</option>
                    <option value="Customer">Customer</option>
                    <option value="Carrier">Carrier</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-black font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full mt-2 px-4 py-6  rounded-sm focus:outline-none focus:ring-2 focus:ring-basicColor bg-[#F2F2F2]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-basicColor text-white font-bold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-basicColor"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="md:w-[90%] mx-auto px-6">
            <h2 className="text-3xl font-bold text-black mb-12">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactData.map((contact, index) => (
                <div key={index} className="space-y-6">
                    <hr className="mt-12 border border-black" />
                  <h3 className="font-bold text-xl mb-2">{contact.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {contact.address}
                  </p>
                  <p className="text-green-500">
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:underline"
                    >
                      {contact.email}
                    </a>
                  </p>
                
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
