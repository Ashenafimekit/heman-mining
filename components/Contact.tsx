import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#F9FAFB] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F33] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Get in touch with Heman Mining Company. We’re here to answer your
            questions and explore partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2D3864] focus:border-[#2D3864]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-500 shadow-sm focus:ring-[#2D3864] focus:border-[#2D3864]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2D3864] focus:border-[#2D3864]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded hover:bg-[#1a1a1a] transition"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6 text-[#1B2F33]">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#2D3864]" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Dire Dawa, Ethiopia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-[#2D3864]" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:Abiymekoya12@gmail.com">
                  Abiymekoya12@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-[#2D3864]" />
              <div className="">
                <h4 className="font-semibold">Phone</h4>
                <div className="flex flex-col">
                  <a href="tel:+251912301070">0912301070</a>
                  <a href="tel:+251937373818">0937373818</a>
                  <a href="tel:+251926888866">0926888866</a>
                </div>
              </div>
            </div>
            <Link
              href="https://www.tiktok.com/@heman.mining.com"
              target="_blank"
              className="flex items-start gap-4"
            >
              <Image
                src="/tik-tok.png"
                width={25}
                height={25}
                alt="tiktok log"
              />
              <h1>Heman Mining</h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
