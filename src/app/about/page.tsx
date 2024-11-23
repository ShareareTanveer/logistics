import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Drew Wilkerson",
    role: "Chief Executive Officer",
    image: "/corporate/member-1.jpg",
    bioLink: "#",
  },
  {
    name: "Jamie Harris",
    role: "Chief Financial Officer",
    image: "/corporate/member-2.jpg",
    bioLink: "#",
  },
  {
    name: "Heidi Ratti",
    role: "Chief Human Resources Officer",
    image: "/corporate/member-3.jpg",
    bioLink: "#",
  },
  {
    name: "Louis Amo",
    role: "President, Truck Brokerage",
    image: "/corporate/member-4.jpg",
    bioLink: "#",
  },
];

const values = [
  {
    title: "Pioneering spirit",
    description:
      "We’re passionate about creating cutting-edge technologies and solutions that connect customers and carriers with the right capacity. We always look boldly ahead to what’s next.",
  },
  {
    title: "Entrepreneurial mindset",
    description:
      "We know the success of our customers, carriers and company is in our hands. We take it upon ourselves to solve problems and outperform.",
  },
  {
    title: "Agile approach",
    description:
      "We move quickly and adapt easily. We leverage technology, data and expertise to anticipate and create the right capacity where it’s needed.",
  },
  {
    title: "Success together",
    description:
      "We do big things when we are inclusive and work together. To perform with excellence, we learn from one another, value diverse perspectives, operate safely, and build strong relationships. We welcome everyone regardless of background, identity or ability.",
  },
  {
    title: "Leading results",
    description:
      "Customers, carriers, stakeholders and colleagues demand best-in-class performance, so we never stop listening, understanding needs, and executing with integrity. We make transportation simpler and more effective for everyone.",
  },
];

export default function About() {
  return (
    <>
      <div className="mx-auto">
        {/* upper section */}
        <div className="relative bg-[url(/corporate/Small_Light_Hero_Dots.jpg)] bg-cover bg-center bg-no-repeat h-[40vh] mb-20">
          <div
            className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:px-8"
            data-aos="fade-right"
          >
            <div className=" text-center sm:text-left text-black">
              <h1 className="text-4xl md:text-6xl ">
                Seasoned experts. Cutting-edge technology. Agile solutions
              </h1>
            </div>
          </div>
        </div>

        <section className="bg-black py-16">
          <div className="w-[90%] mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet our team
            </h2>
            <p className="mx-auto md:w-1/2 text-lg text-gray-300 mb-8">
              We are a team of seasoned transportation experts and master
              technologists working together to deliver outperformance.{" "}
            </p>
            <h3 className="text-basicColor font-semibold mb-12 pb-2 underline border-b">
              Executive Team
            </h3>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-start">
              {teamMembers.map((member, index) => (
                <div key={index} className=" space-y-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={280}
                    width={280}
                    className="rounded-lg mb-4 w-76 h-76 object-cover"
                  />
                  <p className="text-white">{member.role}</p>
                  <h4 className="text-xl text-white font-bold tracking-wider">
                    {member.name}
                  </h4>
                  <p>
                    <Link
                      href={"/"}
                      className="text-basicColor mt-6 underline underline-offset-[20px] my-6"
                    >
                      Read Bio
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            {/* Heading Section */}
            <h2 className="text-4xl font-bold text-black mb-4">Our values</h2>
            <p className=" text-gray-700 mb-20">
              Our values guide our actions every day. They’re the key to our
              unique culture and our ability to deliver for everyone we serve.
            </p>
            {/* Values Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div key={index} className="text-left">
                  <h3 className="text-xl font-bold text-black mb-6">
                    {value.title}
                  </h3>
                  <p className="text-black">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
