import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex flex-col py-4 items-center transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={onClose}
    >
      <ul className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <li key={index} className="text-white">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
