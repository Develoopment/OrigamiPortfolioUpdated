import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="!px-0 !py-10">
      <div className="w-full flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        
        <p className="text-xl lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full transition-colors hover:bg-gray-200"
            >
              <img src={item.iconUrl} width={30} height={20} alt={item.title} />
            </a>
          ))}
        </ul>

      </div>
    </footer>
  );
};

export default Footer;