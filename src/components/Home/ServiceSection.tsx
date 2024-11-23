import { PlaneIcon, ShipIcon, ShoppingBagIcon, TruckIcon } from "lucide-react";
import React from "react";

const ServiceSection = () => {
  const services = [
    {
      title: "Purchasing",
      icon: <ShoppingBagIcon className="w-10 h-10 " />,
      details: [
        "Competitive Pricing",
        "Strategic Sourcing",
        "Negotiation Management",
        "Supplier Management",
        "Purchase Order Management",
        "Quality Assurance & Compliance",
        "Cost Analysis & Savings",
        "Optimize Procurement Spending",
        "Maximize Profitability",
      ],
    },
    {
      title: "Imports",
      icon: <ShipIcon className="w-10 h-10 "/>,
      details: [
        "Export Services from Overseas",
        "Customs Brokers",
        "Tariff Classification",
        "Import Services",
        "Cargo Agents",
        "Cargo Insurance",
        "Warehousing & Distribution",
        "AOG & Multimodal Solutions",
        "DDP & DDU Deliveries",
      ],
    },
    {
      title: "Exports",
      icon: <PlaneIcon className="w-10 h-10 " />,
      details: [
        "Export Documents",
        "Air and Ocean Export Services",
        "AOG & Multimodal Solutions",
        "Project Cargo Solutions",
        "Cargo Agents",
        "Freight Consolidation",
        "Cargo Insurance",
        "Courier Handling & Processing",
        "Nationwide Pickups",
      ],
    },
    {
      title: "Logistics",
      icon: <TruckIcon className="w-10 h-10 " />,
      details: [
        "Warehousing & Distribution",
        "Global Network",
        "Inventory Management",
        "Packing & Crating",
        "Container Loading & Unloading",
        "Segregation & Inventory",
        "Inspection & Supervision Services",
        "Emergency Freight Forwarding",
        "Compliance and Documentation",
      ],
    },
  ];

  return (
    <div className="mx-auto px-12 py-16 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Services
      </h2>
      <p className="text-gray-300 text-center mb-10 w-1/2 mx-auto">
        We have one of the world&apos;s largest networks of independent carriers.
        With RXO, shippers source the right truck for each load and drivers find
        loads that fit their schedules. Finding the optimal transportation
        solution is a seamless experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md py-12 px-6 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center items-center h-20 w-20 mx-auto border rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-black my-6">
              {service.title}
            </h3>
            <ul className="text-black mt-4 space-y-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="text-sm text-left">
                  - {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
