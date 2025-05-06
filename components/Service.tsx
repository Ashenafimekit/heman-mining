import React from "react";
import {
  Mountain,
  Truck,
  LocateFixed,
  Handshake,
} from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="bg-[#FFFBFC] py-16 px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F33] mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg">
          At Heman Mining, we provide a full suite of services designed to meet the diverse needs of the mineral industry.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <div className="bg-[#F9FAFB] p-6 rounded-xl shadow hover:shadow-xl transition">
          <Mountain className="text-[#2D3864] h-8 w-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mineral Extraction</h3>
          <p className="text-gray-600 text-sm">
            Safe and efficient extraction of coal, lithium, and gypsum from our well-managed mining sites.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-[#F9FAFB] p-6 rounded-xl shadow hover:shadow-xl transition">
          <Truck className="text-[#2D3864] h-8 w-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Supply & Distribution</h3>
          <p className="text-gray-600 text-sm">
            Reliable logistics for delivering raw materials to industrial partners both locally and globally.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-[#F9FAFB] p-6 rounded-xl shadow hover:shadow-xl transition">
          <LocateFixed className="text-[#2D3864] h-8 w-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Exploration & Surveying</h3>
          <p className="text-gray-600 text-sm">
            Geological surveys and exploration services to identify and evaluate new mining opportunities.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-[#F9FAFB] p-6 rounded-xl shadow hover:shadow-xl transition">
          <Handshake className="text-[#2D3864] h-8 w-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consulting & Partnerships</h3>
          <p className="text-gray-600 text-sm">
            Strategic collaboration with investors, governments, and organizations in the mining sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
