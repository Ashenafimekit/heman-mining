import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1" />
            <p>Dire Dawa, Ethiopia</p>
          </div>
        </div>

        {/* Phone & Email */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className="flex items-start gap-2 mt-2">
            <Mail className="w-5 h-5 mt-1" />
            <a href="mailto:Abiymekoya12@gmail.com">
              Abiymekoya12@gmail.com
            </a>{" "}
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-5 h-5 mt-1" />
            <div className="flex flex-col">
              <a href="tel:+251912301070">0912301070</a>
              <a href="tel:+251937373818">0937373818</a>
              <a href="tel:+251926888866">0926888866</a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
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
                className="bg-white rounded "
              />
              <h1>Heman Mining</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Heman Mining Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
