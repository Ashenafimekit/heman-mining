import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#FFFBFC] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B2F33] mb-4">
          About Heman Mining Company
        </h1>
        <p className="text-gray-700 text-lg">
          A trusted provider of raw mineral resources, driving industrial growth in Ethiopia and beyond.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 text-gray-800">
        <p className="text-justify leading-relaxed">
          Founded in <strong>2024</strong>, Heman Mining Company is a forward-thinking mining firm based in <strong>Dire Dawa, Ethiopia</strong>. We specialize in the extraction of <strong>coal, lithium</strong>, and <strong>gypsum</strong>, delivering premium raw materials for industries with an eye toward sustainable growth.
        </p>
        <p className="text-justify leading-relaxed">
          Our rapid rise in the mining sector is rooted in securing key mining sites and forming strong community partnerships. With a focus on innovation and environmental care, we are laying the groundwork for long-term success and national economic impact.
        </p>
        <p className="text-justify leading-relaxed">
          <strong>Abiy Mekoya</strong>, the visionary behind Heman Mining, brings a wealth of leadership and passion for resource management. Under his guidance, the company is committed to operational excellence and upholding the highest safety and environmental standards.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-[#1B2F33] text-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Mission Statement</h2>
          <p className="text-justify leading-relaxed text-sm sm:text-base">
            At Heman Mining, our mission is to deliver premium mineral resources with a commitment to sustainability, safety, and economic growth — while preserving the environment and improving the lives of the communities we serve.
          </p>
        </div>
        <div className="bg-[#1B2F33] text-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Vision Statement</h2>
          <p className="text-justify leading-relaxed text-sm sm:text-base">
            To be a globally recognized mining company that leads through ethical practices, innovation, and community impact.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto bg-[#1B2F33] text-white rounded-xl p-6 shadow-md ">
        <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
        <ul className="space-y-2 text-sm sm:text-base list-disc list-inside text-justify">
          <li ><strong>Sustainability:</strong> We prioritize environmentally responsible mining practices.</li>
          <li><strong>Safety:</strong> The well-being of our employees is paramount.</li>
          <li><strong>Integrity:</strong> We uphold transparency and accountability at all levels.</li>
          <li><strong>Community Engagement:</strong> We build long-term partnerships with local communities.</li>
          <li><strong>Innovation:</strong> We invest in advanced technologies to improve efficiency and reduce impact.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
